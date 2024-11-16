use regex::Regex;
use std::collections::HashMap;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;

fn preprocess_text(text: &str) -> Vec<String> {
    text.to_lowercase() // 转小写
        .split_whitespace() // 按空白分词
        .filter(|&word| !word.is_empty()) // 过滤空词
        .map(|word| word.to_string()) // 转换为 String
        .collect()
}

fn term_frequency(words: &Vec<String>) -> HashMap<String, usize> {
    let mut freq = HashMap::new();
    for word in words {
        *freq.entry(word.clone()).or_insert(0) += 1;
    }
    freq
}

fn cosine_similarity(freq1: &HashMap<String, usize>, freq2: &HashMap<String, usize>) -> f64 {
    let mut dot_product = 0;
    let mut norm_a = 0;
    let mut norm_b = 0;

    // 计算点积和向量的范数
    for (word, &count1) in freq1 {
        if let Some(&count2) = freq2.get(word) {
            dot_product += count1 * count2;
        }
        norm_a += count1 * count1;
    }

    for &count in freq2.values() {
        norm_b += count * count;
    }

    if norm_a == 0 || norm_b == 0 {
        return 0.0; // 避免除以零
    }

    dot_product as f64 / (f64::sqrt(norm_a as f64) * f64::sqrt(norm_b as f64))
}

#[wasm_bindgen]
pub fn calculate_cosine_similarity(target: &str, source: &str) -> f64 {
    let result = Regex::new(r"(\{\{.*?\}\})")
        .unwrap()
        .replace_all(target, "(.*?)")
        .to_string();

    let result = Regex::new(r"<\d+>")
        .unwrap()
        .replace_all(&result, "")
        .to_string();

    let result = Regex::new(r"<\/\d+>")
        .unwrap()
        .replace_all(&result, "")
        .to_string();

    let result = result.replace("\n", "");
    let result = result.replace("+", "").replace("-", "").replace("*", "");

    let words1 = preprocess_text(source);
    let words2 = preprocess_text(&result);

    let freq1 = term_frequency(&words1);
    let freq2 = term_frequency(&words2);

    cosine_similarity(&freq1, &freq2)
}

// 计算js 传入的数组对象 content { target:string; key:string }，返回一个数组对象 { key:string; value:string }
#[wasm_bindgen]
pub fn calculate_cosine_similarity_batch(
    source: &str,
    tagets: js_sys::Array,
    cosine_similarity_value: js_sys::Number,
) -> js_sys::Array {
    let result: js_sys::Array = js_sys::Array::new();

    for i in 0..tagets.length() {
        // 获取 js 对象
        let obj = tagets.get(i);
        // 提取对象的 content 字段
        let content = js_sys::Reflect::get(&obj, &JsValue::from_str("content"))
            .unwrap()
            .as_string()
            .unwrap_or_else(|| String::from(""));
        let key = js_sys::Reflect::get(&obj, &JsValue::from_str("key"))
            .unwrap()
            .as_string()
            .unwrap_or_else(|| String::from(""));
        // 计算相似度
        let value = calculate_cosine_similarity(&content, source);

        if value >= cosine_similarity_value.as_f64().unwrap() {
            // 构建返回对象
            let result_obj = js_sys::Object::new();
            js_sys::Reflect::set(
                &result_obj,
                &JsValue::from_str("key"),
                &JsValue::from_str(&key),
            )
            .unwrap();
            js_sys::Reflect::set(
                &result_obj,
                &JsValue::from_str("content"),
                &JsValue::from_str(&content),
            )
            .unwrap();
            result.push(&result_obj);
        }
    }

    result
}
