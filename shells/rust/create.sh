#!/bin/bash

# 提示用户输入项目名称
read -p "请输入项目名称: " project_name


# 校验
if [ -z $project_name ]; then
    echo "项目名称不能为空"
    exit 1
fi

# 创建项目
cargo new ./crates/$project_name

# 进入项目目录
cd ./crates/$project_name