# WebAssembly

## 使用 cargo 创建一个 lib

<script>
    import init, { calculate_cosine_similarity_batch } from './wasm/i18n_cosine_similarity';
   
    (async () => {
    try {
      await init();
      console.log(init,calculate_cosine_similarity_batch)
      console.log( calculate_cosine_similarity_batch("66",[{
        key:"key",
        content:"66"
      }],0.8))
    } catch (error) {
      console.log('error', error);
    }
  })()
</script>