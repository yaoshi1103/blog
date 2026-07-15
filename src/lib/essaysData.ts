/* 随笔数据 */
export type Essay = {
  id: number;
  date: string;
  title: string;
  content: string;
  markdown?: string;
  tags: string[];
};

export const AI_NOTES_MD = `# 1. 机器学习
机器学习就是从数据中获得规律，通过人对规律进行标注，然后人将这个规律写成一套算法，使算法能够准确判断或识别出对应物体。

# 2. 深度学习
深度学习在机器学习的基础上，不需要人对规律进行总结，其内部会将输入的数据总结、分析规律、形成一套算法，从而识别或判断出对应物体。

![机器学习vs深度学习](/ml-vs-dl.png)

# 3. 神经网络
机器模拟人类大脑神经元工作的一种算法，input输入经过多层参数线性运算的叠加，最终得到一个output输出，下图为简单的三层神经网络的模型。

![神经网络模型](/neural-network.png)

# 4. 大语言模型(LLM)
大语言模型是深度学习领域专门设计用于自然语言处理领域特殊的深度神经网络。规模大，训练数据大，算力大，参数规模大，故称之为大语言模型。`;

export const PYTHON_REVIEW_MD = `# print函数
### print(values, sep=" ", end="\\n", file=None, flush=False)
- sep内赋值的内容将作为每个元素输出的间隔符。
- end内赋值的内容将作为value结束末尾的换行。
- file内可选择对文件的打开方式。常见有r：只读。w：只写。a：追加。添加+表示允许读写。
- flush可选True和False两种选择，True代表每运行一步屏幕就立刻显示一步，False则是最后一起在屏幕显示出来。
# 格式化输出
### 格式化字符
- %c：字符
- %s：字符串
- %d：十进制整数
- %f：浮点数
### 格式化输出模板
### 基本格式化输出：使用%
\`\`\`python

print('我的名字是%s，年龄是%d岁' % ("01", 18))

\`\`\`
#### format()格式化输出
\`\`\`python

print("我的名字是：{}，年龄为：{}岁".format("01", 18))

\`\`\`
#### f表达式格式化输出(常用)
\`\`\`python

name, age = "01", 18

print(f"名字是{name}，今年{age}岁")

\`\`\`
# 对象
### python对象的三要素
  - \`id\`：对象的唯一标识符。
  - \`type\`：对象的类型。
  - \`value\`：对象的值。
# input函数
可以自己输入需要的元素，默认以字符串形式返回，但可使用int以及其他类型进行强制转换。
\`\`\`python
a=int(input("请输入"))
print(a)
\`\`\``;

export const WORLD_MODEL_MD = `# 世界模型
### 广义世界模型
能够预测之后会发生什么的模型都可以被称之为广义世界模型。
- LLM能够预测下一个Token，例如：智谱GLM5.2、Claude code Sonnet4.8等。
- 视频生成模型可以预测下一帧的画面，例如：豆包Seedance2.5、即梦等。
### 狭义世界模型(action-conditioned)
必须以动作为条件，强调在动作之后世界会发生的变化。
# 世界模型的三种功能性类型
### 渲染器
渲染器主要做的是输出观察到的信息，可以以图片或者视频的格式进行输出，例如：文生视频模型Sora(已下架)、交互式生成系统RTFM(Real-Time Frame Model)等都属于渲染器。
### 模拟器
模拟器的职责是输出世界本来的状态，需要遵循物理、几何、动力学的规律，追求极致真实，遵从牛顿定理，符合因果规律。常见的模拟器：Dreamer系列。
### 规划器
当给定了观察和目标后，规划器输出动作。与渲染器相反，渲染器主要是把动作转化为观察；规划期主要是把观察转化为动作。常见的规划器：VLA(Vision-Language-Action)。
### 逻辑闭环过程
输入真实情况→规划器决定动作→模拟器推演后果→渲染器画出预测的画面→对比误差修正下一轮输入。
# RTFM与JEPA的对立
两种路线的对立本质上是以Yann LeCun为代表提出的、与当前主流生成式AI截然不同的一条通往“世界模型”和自主智能的技术路径。

| 对比维度     | **RTFM路线**    | **JEPA式路线**     |
| -------- | ------------- | --------------- |
| **输出**   | 直接生成2D像素图片/视频 | 输出抽象的特征向量       |
| **目标**   | 看起来真实的画面      | 理解真实的物理规律       |
| **计算负担** | 重             | 轻               |
| **适用情况** | 适合展示结果、给人看    | 适合内部规划、给AI自己推理用 |`;

export const WORLD_MODEL_TERMS_MD = `# 世界模型名词解释

- **ViT（Vision Transformer）**：把图像按一个一个切成方块，像处理单词一样处理这些方块，主要是使用 Transformer 来处理图像。是主流的视觉大模型的首选方案。
- **Autoencoder（自编码器）**：先压缩再还原，编码器把图像压成低维的隐变量，解码器再把它还原。目的是逼着网络学会提取最核心的特征。
- **MAE（Masked Autoencoder）**：一种简单的自监督学习机制。先遮住多数的方块，只保留少数的可见方块，然后需要解码器将剩余的部分补齐。
- **师生网络（Teacher-Student Network）**：是一种对称的架构，学生网络负责从输入中学习特征，教师网络负责为学生生成标准答案（即预测目标）。使用学生网络的权重做 EMA 来缓慢更新，相当于老师比学生学得慢但更稳，以此引导模型提取高质量特征。
- **DINO（DIstillation with NO labels）**：一种自监督学习框架，核心是师生网络。学生网络看图的局部裁剪，教师网络看图全局裁剪，让学生去拟合教师的输出。以此能让 ViT 自动学会分割物体轮廓，不需要人工标注。
- **EMA（Exponential Moving Average）**：在上述 DINO 或 MAE 中，教师网络的权重是通过学生网络权重的滑动平均（EMA）来缓慢更新，保证了训练的稳定性。
- **JEPA（Joint Embedding Predictive Architecture）**：Yann LeCun 力推的新范式。与 MAE 预测**像素**不同，JEPA 的预测目标是输入数据的抽象表征（嵌入）。例如：给一张不完整的图，它预测完整图的特征向量。`;


export const PYTHON_PRACTICE_MD = `### 1.1 内置数据类型

| 类型      | 名称   | 特征                 | 典型用途  |
| ------- | ---- | ------------------ | ----- |
| \`int\`   | 整型   | 无小数点的数字            | 计数、索引 |
| \`float\` | 浮点型  | 含小数点的数字            | 度量、权重 |
| \`str\`   | 字符串型 | 由引号界定的字符序列         | 文本    |
| \`bool\`  | 布尔型  | 仅 \`True\` / \`False\` | 条件判断  |


### 1.2 关键约束
- **文字必须包裹在引号中**（单引号 \`'\` 或双引号 \`"\` 均可，需成对）。
- **数字禁止加引号**，否则会被当成文字。
- 代码中的标点（引号、逗号、冒号、括号）必须使用英文半角符号，中文全角符号会导致 \`SyntaxError\`。

\`\`\`python
age = 18            # int，整型
height = 1.75       # float，浮点型
name = "小明"        # str，字符串型（引号界定）
is_student = True   # bool，布尔型
\`\`\`

### 1.3 练习回顾
- 声明标识符 \`my_name\` 并绑定字符串值：
  \`\`\`python
  my_name = "topaz"
  \`\`\`
- 声明标识符 \`study_hours\` 并绑定整型值：
  \`\`\`python
  study_hours = 5
  \`\`\`

---

## 二、列表与字典

### 2.1 列表
列表就是一串按顺序排好的数据，里面的内容可以随时改。

- 元素通过索引访问。
- 从 0 开始数：首个元素编号为 \`0\`，第二个为 \`1\`，依此类推。这是最常见的越界/错位错误来源。

\`\`\`python
fruits = ["苹果", "香蕉", "橘子"]
print(fruits[0])   # 输出：苹果  （索引 0 对应第一个元素）
print(fruits[1])   # 输出：香蕉
\`\`\`

### 2.2 字典
字典用键对应值的方式来存数据。

\`\`\`python
person = {"name": "小明", "age": 18, "city": "北京"}
print(person["name"])   # 输出：小明
print(person["age"])    # 输出：18
\`\`\`

### 2.3 二者区分
- 列表：以索引访问元素。
- 字典：以键访问元素。
- 实际写代码时，配置文件多为 \`dict\`，批量数据多为 \`list\`。

### 2.4 练习回顾
\`\`\`python
eat = ["苹果", "栗子", "香蕉"]
print(eat[0])                       # 输出：苹果

dicc = {"书名": "长城", "价格": "10", "有没有货": "无"}
print(dicc["价格"])                 # 输出：10
\`\`\`

---

## 三、字符串处理

### 3.1 f-string
以前缀 \`f\` 标记，花括号 \`{}\` 内可嵌入表达式，运行时被替换为对应值。

\`\`\`python
name = "小明"
age = 18
msg = f"我叫{name}，今年{age}岁"
print(msg)   # 输出：我叫小明，今年18岁
\`\`\`

### 3.2 str.replace(old, new)
返回将 \`old\` 子串替换为 \`new\` 子串后的新字符串。

\`\`\`python
s = "我喜欢苹果"
s2 = s.replace("苹果", "香蕉")
print(s2)   # 输出：我喜欢香蕉
\`\`\`

### 3.3 str.split(sep)
以分隔符 \`sep\` 拆分字符串，返回由子串组成的列表。

\`\`\`python
s = "苹果,香蕉,橘子"
parts = s.split(",")
print(parts)   # 输出：['苹果', '香蕉', '橘子']
\`\`\`

### 3.4 练习回顾
- 题：\`city = "北京"; hello = f"你好，{city}!"; print(hello)\` → 输出 \`你好，北京！\`
- 题：\`text = "今天天气真好"; new = text.replace("真好", "一般"); print(new)\` → 输出 \`今天天气一般\`

---

## 四、函数定义

### 4.1 定义与调用
- \`def\` 语句用于定义函数，封装可复用的代码块。
- 函数名后括号内声明形参。
- \`return\` 语句将计算结果作为返回值传出；无 \`return\` 时函数返回 \`None\`。

\`\`\`python
def greet(name):          # name 为形参
    sentence = f"你好，{name}！"
    return sentence       # 返回计算结果

result = greet("小明")    # "小明" 为实参
print(result)            # 输出：你好，小明！
\`\`\`

### 4.2 形参 vs 实参
- 形参：函数定义时括号中声明的占位标识符，此时尚无具体值。
- 实参：函数调用时实际传入的具体值。
- 调用发生时，实参按位置或按关键字绑定到对应的形参。

\`\`\`python
def add_one(n):      # n 为形参
    return n + 1

answer = add_one(5)  # 5 为实参，绑定到形参 n
print(answer)        # 输出：6
\`\`\`

---

## 五、异常处理

### 5.1 try / except 结构
- \`try\` 子句：包裹可能引发异常的代码。
- \`except\` 子句：捕获指定异常并执行兜底逻辑，防止程序因未处理异常而终止。
- 若不捕获异常，错误会一路向上传，最终导致程序中断并打印一大串报错信息。

\`\`\`python
try:
    number = int("abc")   # 触发 ValueError：'abc' 无法转为 int
except:
    print("转数字失败了，但我接住了，程序继续跑")
\`\`\`

### 5.2 经典场景：除零错误
\`\`\`python
try:
    print(10 / 0)         # 触发 ZeroDivisionError
except:
    print("不能除以0哦")   # 输出：不能除以0哦
\`\`\`
> 读取可能不存在的配置文件、调用可能失败的服务、执行可能除零的计算等位置，若缺少 \`try/except\` 即为典型的「未捕获异常」类 bug。

---

## 六、类与对象

### 6.1 类与实例
类定义一种类型，描述这类对象共有的属性和方法。通过 \`实例 = 类名(...)\` 创建实例。

\`\`\`python
class Cat:
    def __init__(self, name):
        self.name = name
    def meow(self):
        return self.name + "喵"

mimi = Cat("咪咪")
print(mimi.meow())   # 输出：咪咪喵
\`\`\`

### 6.2 构造方法
\`__init__\` 是构造方法，创建实例时由解释器自动调用，用来给新对象设置初始属性。

- **构造方法的首个形参固定为 \`self\`**，代表正在被创建的这个实例。

### 6.3 self 是什么
\`self\` 是实例方法的第一个形参，调用时由解释器自动传入，代表调用该方法的那个实例。

- **self 随调用者变化**：同一份方法，谁调用，self 就是谁。
- 调用 \`mimi.meow()\` 在内部等价于 \`Cat.meow(mimi)\`，即把 \`mimi\` 作为实参自动传给形参 \`self\`。

\`\`\`python
class Cat:
    def __init__(self, name):
        self.name = name
    def meow(self):
        return self.name + "喵"

mimi = Cat("咪咪")
huahua = Cat("花花")
print(mimi.meow())     # 输出：咪咪喵（self 是 mimi）
print(huahua.meow())   # 输出：花花喵（self 是 huahua）
\`\`\`

### 6.4 self.name = name 逐个看
以 \`self.name = name\` 为例，从左到右四部分：

- \`self\`：这一刻正在被创建的那个实例。
- \`.name\`：这个实例身上的一个属性，专门用来存名字。
- \`=\`：把右边的值装进左边的属性。
- \`name\`（右边）：方法收到的参数值，比如 \`"咪咪"\`。

整行含义：把传进来的名字，存进这个对象自己的名字属性里。

- **左右两个 name 不是一回事**：右边是参数，左边是属性。

走一遍：\`mimi = Cat("咪咪")\` 时，解释器造出 \`mimi\`，把 \`"咪咪"\` 绑给参数 \`name\`，\`self\` 等于 \`mimi\`，执行 \`self.name = name\` 之后，\`mimi\` 就有了 \`name\` 属性，值为 \`"咪咪"\`。

### 6.5 完整示例
学生（存两个属性）：
\`\`\`python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def intro(self):
        return "我叫" + self.name + "，今年" + str(self.age) + "岁"

xiaoming = Student("小明", 18)
print(xiaoming.intro())   # 输出：我叫小明，今年18岁
\`\`\`

矩形（同一方法，不同实例结果不同）：
\`\`\`python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    def area(self):
        return self.width * self.height

a = Rectangle(3, 4)
b = Rectangle(5, 6)
print(a.area())   # 输出：12（此时 self 是 a）
print(b.area())   # 输出：30（此时 self 是 b）
\`\`\`

### 6.6 练习与易错点
题：写一个 \`Book\` 类，创建时存书名和价格，有方法 \`描述()\` 返回 \`《书名》售价价格元\`，创建《Python入门》价格 59 并打印。
\`\`\`python
class Book:
    def __init__(self, shuming, jiage):
        self.shuming = shuming
        self.jiage = jiage
    def 描述(self):
        return self.shuming + "售价" + str(self.jiage) + "元"   # 数字拼文字要先转成文字

book1 = Book("《Python入门》", 59)
print(book1.描述())   # 输出：《Python入门》售价59元
\`\`\`

- **易错点**：数字（如 \`59\`）不能直接和文字相加，否则报错。凡是把数字拼进句子，先套 \`str()\` 转成文字。`;

export const essays: Essay[] = [
  { id: 2, date: '2026-07-03', title: '滤波器与 PID 是一对', content: '控制课上讲 PID 整定，突然反应过来：滤波器和 PID 其实是一对，前者收拾信号，后者收拾误差。机器视觉里这俩谁也躲不掉，算是把专业课串起来了。', tags: ['控制工程', '学习'] },
  { id: 3, date: '2026-06-22', title: '最小可运行 Agent 跑通了', content: '跟着教程搭了个最小可运行的 Agent，工具调用跑通的那一刻有点上头。下一步想接 MediaPipe，让它真的"看得见"——这才对得起"机器视觉"这个方向。', tags: ['AI Agent', 'MediaPipe'] },
  { id: 4, date: '2026-06-12', title: 'INFJ 的试错方式', content: 'INFJ 的苦恼：方案没想清楚前不想开口，可 vibe coding 又要求快速试错。和解的办法是——先在代码里试，试完再讲。代码不撒谎，比口头推演省事。', tags: ['随想'] },
  { id: 5, date: '2026-06-01', title: '博客迁到 Next.js', content: '把博客从 Hexo 迁到 Next.js，折腾了一整个周末。静态导出 + Cloudflare Pages，零成本上线，研究生钱包友好。绿点也保住了，值。', tags: ['博客', '部署'] },
  {
    id: 6,
    date: '2026-07-09',
    title: 'AI 概念学习笔记',
    content: '机器学习、深度学习、神经网络和大语言模型的概念梳理——从数据中获得规律，到不需要人工标注规律，再到模拟大脑神经元结构。',
    markdown: AI_NOTES_MD,
    tags: ['AI', '学习笔记'],
  },
  {
    id: 7,
    date: '2026-07-10',
    title: 'Python 语法回顾',
    content: '温习 Python 基础：print 函数的参数、三种字符串格式化方式（% / format / f-string）、对象三要素与 input 函数。',
    markdown: PYTHON_REVIEW_MD,
    tags: ['Python', '学习笔记'],
  },
  {
    id: 8,
    date: '2026-07-12',
    title: '世界模型笔记',
    content:
      '能预测未来的模型都算世界模型：广义（预测下一个 token/帧）vs 狭义（以动作为条件）。三类功能性角色——渲染器、模拟器、规划器，以及 RTFM 与 JEPA 两条技术路线的对立。',
    markdown: WORLD_MODEL_MD,
    tags: ['AI', '世界模型', '学习笔记'],
  },
  {
    id: 9,
    date: '2026-07-14',
    title: '世界模型名词解释',
    content:
      '世界模型相关核心术语速查：ViT、自编码器、MAE、师生网络、DINO、EMA、JEPA——从视觉 Transformer 到 Yann LeCun 力推的联合嵌入预测架构。',
    markdown: WORLD_MODEL_TERMS_MD,
    tags: ['AI', '世界模型', '学习笔记'],
  },
  {
    id: 10,
    date: '2026-07-15',
    title: 'Python 练习笔记',
    content: 'Python 基础练习：内置数据类型、列表与字典、字符串处理（f-string / replace / split）、函数定义与形参实参，以及 try/except 异常处理。',
    markdown: PYTHON_PRACTICE_MD,
    tags: ['Python', '学习笔记'],
  },
];
