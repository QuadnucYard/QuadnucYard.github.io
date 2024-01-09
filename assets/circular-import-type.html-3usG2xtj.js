import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c as l,b as n,d as s,e,a as c,f as t}from"./app-gR0I4E4L.js";const d={},u=n("h1",{id:"python-typing-遇到循环导入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python-typing-遇到循环导入","aria-hidden":"true"},"#"),s(" Python typing 遇到循环导入")],-1),r=n("p",null,"Python 有着和 C++ 极为相似的 import 系统，都是 include once。这样就很容易产生循环包含/导入的问题。",-1),m=n("p",null,"从依赖关系角度，确实可以通过将依赖关系构建成树的方式来避免循环导入。但是当使用 typing 的时候，情况就不一样了……",-1),v=n("h2",{id:"测试环境配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#测试环境配置","aria-hidden":"true"},"#"),s(" 测试环境配置")],-1),k=n("p",null,"Ubuntu 22.04，配置 conda。",-1),y={href:"https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Linux-x86_64.sh",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Linux-x86_64.sh
<span class="token function">sudo</span> <span class="token function">sh</span> ./Miniconda3-latest-Linux-x86_64.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后会进入一个命令行环境，一路回车/空格/yes 即可。安装完成后，重启终端即可使用 <code>conda</code>。</p><p>创建环境：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conda create <span class="token parameter variable">--name</span> py310 <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.10</span>
conda activate py310
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是我使用的是 fish，它会提示（bash 则没有该问题）：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>CommandNotFoundError: Your shell has not been properly configured to use &#39;conda activate&#39;.
To initialize your shell, run

    $ conda init &lt;SHELL_NAME&gt;

Currently supported shells are:
  - bash
  - fish
  - tcsh
  - xonsh
  - zsh
  - powershell

See &#39;conda init --help&#39; for more information and options.

IMPORTANT: You may need to close and restart your shell after running &#39;conda init&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据提示，得到解决方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conda init fish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后遵循提示重启终端。这样 <code>activate</code> 就没问题了。查看当前环境：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>&gt; conda activate py310                                                    (base) 
&gt; conda env list                                                         (py310) 
# conda environments:
#
base                     /home/oslab/miniconda3
py310                 *  /home/oslab/miniconda3/envs/py310
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实不用特地查看，fish 会自动显示当前环境……</p><h2 id="简单的测试用例与问题" tabindex="-1"><a class="header-anchor" href="#简单的测试用例与问题" aria-hidden="true">#</a> 简单的测试用例与问题</h2><p>下面来测试一个简单的 EC 系统。每个 Entity 会挂 Component，同时 Component 保存持有它的 Entity。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># component.py</span>
<span class="token keyword">class</span> <span class="token class-name">Component</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> entity<span class="token punctuation">:</span> Entity<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>entity <span class="token operator">=</span> entity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># entity.py</span>
<span class="token keyword">from</span> component <span class="token keyword">import</span> Component

<span class="token keyword">class</span> <span class="token class-name">Entity</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>component <span class="token operator">=</span> Component<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> entity <span class="token keyword">import</span> Entity

e <span class="token operator">=</span> Entity<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>component<span class="token punctuation">.</span>entity<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尝试运行，没有问题，因为没有循环导入。</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>&gt; python main.py                                                         (py310) 
&lt;entity.Entity object at 0x7fd0b3957d60&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>modern python 是要使用 typing 的，于是我们给 Component 加上 typing：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># component.py</span>
<span class="token keyword">from</span> entity <span class="token keyword">import</span> Entity

<span class="token keyword">class</span> <span class="token class-name">Component</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> entity<span class="token punctuation">:</span> Entity<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>entity <span class="token operator">=</span> entity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果不出所料，循环导入导致导入了部分初始化的类。</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>&gt; python main.py                                                     (py310) 
Traceback (most recent call last):
  File &quot;***/main.py&quot;, line 1, in &lt;module&gt;
    from entity import Entity
  File &quot;***/entity.py&quot;, line 1, in &lt;module&gt;
    from component import Component
  File &quot;***/component.py&quot;, line 1, in &lt;module&gt;
    from entity import Entity
ImportError: cannot import name &#39;Entity&#39; from partially initialized module &#39;entity&#39; (most likely due to a circular import) (***/entity.py)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果把 import 放到最后也是没有用的。它不提示循环引用了，而是 Entity 未定义：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># component.py</span>
<span class="token keyword">class</span> <span class="token class-name">Component</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> entity<span class="token punctuation">:</span> Entity<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>entity <span class="token operator">=</span> entity

<span class="token keyword">from</span> entity <span class="token keyword">import</span> Entity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>&gt; python main.py                                                     (py310) 
Traceback (most recent call last):
  File &quot;***/main.py&quot;, line 1, in &lt;module&gt;
    from entity import Entity
  File &quot;***/entity.py&quot;, line 1, in &lt;module&gt;
    from component import Component
  File &quot;***/component.py&quot;, line 1, in &lt;module&gt;
    class Component:
  File &quot;***/component.py&quot;, line 2, in Component
    def __init__(self, entity: Entity):
NameError: name &#39;Entity&#39; is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用 Pylance 它还会亲切地提示 <code>&quot;Entity&quot; is unbound</code>。解决方案：给类型注解的 <code>Entity</code> 加引号：<code>entity: &quot;Entity&quot;</code>。不过新的问题就来了：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>&gt; python main.py                                                     (py310) 
Traceback (most recent call last):
  File &quot;***/main.py&quot;, line 1, in &lt;module&gt;
    from entity import Entity
  File &quot;***/entity.py&quot;, line 1, in &lt;module&gt;
    from component import Component
  File &quot;***/component.py&quot;, line 11, in &lt;module&gt;
    from entity import Entity
ImportError: cannot import name &#39;Entity&#39; from partially initialized module &#39;entity&#39; (most likely due to a circular import) (***/entity.py)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刚才只是语法检查时发生错误，现在仍然没有避免循环导入。</p><p>解决这个问题就需要消除两个文件互相 import。但实质上是不存在循环导入问题的，因为我仅仅是增加了方便静态分析的类型注解，对程序运行毫无影响。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2>`,31),h={href:"https://adamj.eu/tech/2021/05/13/python-type-hints-how-to-fix-circular-imports/",target:"_blank",rel:"noopener noreferrer"},f=t(`<p><code>typing</code> 提供了一个 <code>TYPE_CHECKING</code> 全局常量，它是这么描述的，仅当类型检测时为 <code>True</code>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Constant that&#39;s True when type checking, but False here.</span>
TYPE_CHECKING <span class="token operator">=</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以写成：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> typing <span class="token keyword">import</span> TYPE_CHECKING

<span class="token keyword">if</span> TYPE_CHECKING<span class="token punctuation">:</span>
    <span class="token keyword">from</span> entity <span class="token keyword">import</span> Entity

<span class="token keyword">class</span> <span class="token class-name">Component</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> entity<span class="token punctuation">:</span> <span class="token string">&quot;Entity&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>entity <span class="token operator">=</span> entity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，如果不给注解的 <code>Entity</code> 加引号，就会再次出 <code>NameError: name &#39;Entity&#39; is not defined</code>……这样很蠢，不是吗？</p><p>但是我们有 <code>__future__</code> 用于实现未来版本增加的特性。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># __future__.py</span>
annotations <span class="token operator">=</span> _Feature<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;beta&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                       <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;alpha&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                       CO_FUTURE_ANNOTATIONS<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里可以看到，这个特性在 3.7 出现，到了 3.11 正式包含为默认。修改后代码如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> __future__ <span class="token keyword">import</span> annotations
<span class="token keyword">from</span> typing <span class="token keyword">import</span> TYPE_CHECKING

<span class="token keyword">if</span> TYPE_CHECKING<span class="token punctuation">:</span>
    <span class="token keyword">from</span> entity <span class="token keyword">import</span> Entity

<span class="token keyword">class</span> <span class="token class-name">Component</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> entity<span class="token punctuation">:</span> Entity<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>entity <span class="token operator">=</span> entity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后问题就解决了。</p><p>这个特性还可以解决另一个问题：Self 类型。给 <code>Component</code> 加一个 <code>clone</code> 方法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Component</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> entity<span class="token punctuation">:</span> <span class="token string">&quot;Entity&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>entity <span class="token operator">=</span> entity

    <span class="token keyword">def</span> <span class="token function">clone</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token string">&quot;Component&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> Component<span class="token punctuation">(</span>self<span class="token punctuation">.</span>entity<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回类型需要加引号，否则同样会出现 <code>NameError</code>。导入 <code>annotations</code> 则可以免去引号。</p><p>当然，返回类型也可以使用 <code>Self</code>，不过在 3.10 会报错 <code>ImportError: cannot import name &#39;Self&#39; from &#39;typing&#39;</code>，因为这是 3.11 才加的。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Self

<span class="token keyword">class</span> <span class="token class-name">Component</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> entity<span class="token punctuation">:</span> <span class="token string">&quot;Entity&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>entity <span class="token operator">=</span> entity

    <span class="token keyword">def</span> <span class="token function">clone</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Self<span class="token punctuation">:</span>
        <span class="token keyword">return</span> Component<span class="token punctuation">(</span>self<span class="token punctuation">.</span>entity<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是 <code>typing_extensions</code> 提供了未来版本增加的类型注解（miniconda 默认未安装，需要手动下载），可在 Python 3.11 前代替 <code>typing</code> 里的 <code>Self</code>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> typing_extensions <span class="token keyword">import</span> Self
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看一下这个 <code>Self</code> 是怎么实现的。如果版本大于等于 3.11，那么直接从官方 typing 里导入相关类型，否则声明一个 <code>_SpecialForm</code> 类型的变量（不知道有无编译器开洞）。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># unfortunately we have to duplicate this class definition from typing.pyi or we break pytype</span>
<span class="token keyword">class</span> <span class="token class-name">_SpecialForm</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> Any<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">object</span><span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">if</span> sys<span class="token punctuation">.</span>version_info <span class="token operator">&gt;=</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">__or__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">:</span> Any<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> _SpecialForm<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token keyword">def</span> <span class="token function">__ror__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">:</span> Any<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> _SpecialForm<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment"># New things in 3.11</span>
<span class="token comment"># NamedTuples are not new, but the ability to create generic NamedTuples is new in 3.11</span>
<span class="token keyword">if</span> sys<span class="token punctuation">.</span>version_info <span class="token operator">&gt;=</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">from</span> typing <span class="token keyword">import</span> <span class="token punctuation">(</span>
        LiteralString <span class="token keyword">as</span> LiteralString<span class="token punctuation">,</span>
        NamedTuple <span class="token keyword">as</span> NamedTuple<span class="token punctuation">,</span>
        Never <span class="token keyword">as</span> Never<span class="token punctuation">,</span>
        NotRequired <span class="token keyword">as</span> NotRequired<span class="token punctuation">,</span>
        Required <span class="token keyword">as</span> Required<span class="token punctuation">,</span>
        Self <span class="token keyword">as</span> Self<span class="token punctuation">,</span>
        Unpack <span class="token keyword">as</span> Unpack<span class="token punctuation">,</span>
        assert_never <span class="token keyword">as</span> assert_never<span class="token punctuation">,</span>
        assert_type <span class="token keyword">as</span> assert_type<span class="token punctuation">,</span>
        clear_overloads <span class="token keyword">as</span> clear_overloads<span class="token punctuation">,</span>
        dataclass_transform <span class="token keyword">as</span> dataclass_transform<span class="token punctuation">,</span>
        get_overloads <span class="token keyword">as</span> get_overloads<span class="token punctuation">,</span>
        reveal_type <span class="token keyword">as</span> reveal_type<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    Self<span class="token punctuation">:</span> _SpecialForm
    Never<span class="token punctuation">:</span> _SpecialForm
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>换到 3.11 就没这么多问题了，涉及 <code>TYPE_CHECKING</code> 的类型，理论上不加引号是可以的，但是如果提示 <code>NameError</code>，那就把 <code>import annotations</code> 加上吧……</p>`,20);function _(w,x){const a=o("ExternalLinkIcon");return p(),l("div",null,[u,r,m,v,k,n("p",null,[s("从 "),n("a",y,[s("清华源"),e(a)]),s(" 安装，直接下载 "),n("a",b,[s("latest"),e(a)]),s(" 就行。")]),g,n("p",null,[s("解决方法参考了 "),n("a",h,[s("https://adamj.eu/tech/2021/05/13/python-type-hints-how-to-fix-circular-imports/"),e(a)]),s("。 源于一个思想：我如何让 import 只用于静态分析，让分析器找到注解的类型？运行期并不需要这个导入。")]),f,c(" （切换环境后需要 Restart language server） ")])}const q=i(d,[["render",_],["__file","circular-import-type.html.vue"]]);export{q as default};
