import os
import argparse

def convert_ale_encoding(input_file_path):
    try:
        # 提取输入文件的目录和文件名
        input_dir = os.path.dirname(input_file_path)
        input_filename = os.path.basename(input_file_path)
        name, ext = os.path.splitext(input_filename)
        
        # 生成输出文件路径，添加 _GBK 后缀
        output_filename = f"{name}_GBK{ext}"
        output_file_path = os.path.join(input_dir, output_filename)
        
        # 读取 UTF-8 编码的 ALE 文件
        with open(input_file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # 将内容保存为 GBK 编码的 ALE 文件
        with open(output_file_path, 'w', encoding='gbk') as file:
            file.write(content)

        print(f"文件已成功从 UTF-8 编码转换为 GBK 编码并保存到 {output_file_path}")

        # 在不同操作系统中显示输出的 ALE 文件
        if os.name == 'posix':
            os.system(f'open -R "{output_file_path}"')  # macOS
        elif os.name == 'nt':
            os.system(f'explorer /select,"{output_file_path}"')  # Windows
        else:
            print("自动打开文件夹功能在此操作系统上不可用。")

    except FileNotFoundError:
        print(f"文件未找到：{input_file_path}")
    except Exception as e:
        print(f"发生错误：{e}")

if __name__ == "__main__":
    # 设置 argparse 参数解析
    parser = argparse.ArgumentParser(description='将 UTF-8 编码的 ALE 文件转换为 GBK 编码')
    parser.add_argument('input_file', type=str, help='输入 ALE 文件路径')
    args = parser.parse_args()

    # 获取绝对路径并执行转换
    input_ale_file = os.path.abspath(args.input_file)
    convert_ale_encoding(input_ale_file)