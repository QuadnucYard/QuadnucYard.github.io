import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,f as t}from"./app-678df5ab.js";const l={},a=t(`<h1 id="matplotlib-缺少-tkinter" tabindex="-1"><a class="header-anchor" href="#matplotlib-缺少-tkinter" aria-hidden="true">#</a> Matplotlib 缺少 tkinter</h1><p>装了新版 Python 后使用 matplotlib 出现了这样的问题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>****.py: UserWarning: Matplotlib is currently using agg, which is a non-GUI backend, so cannot show the figure.
  plt.show()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>根据报错信息，使用了无 GUI 的后端。</p><p>搜索相关问题，看到有人给出解决方案：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib
matplotlib<span class="token punctuation">.</span>use<span class="token punctuation">(</span><span class="token string">&#39;TkAgg&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这样操作会导致新的运行时报错：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Traceback (most recent call last):
  File &quot;****.py&quot;, line 40, in &lt;module&gt;
    plt.figure(figsize=(12, 4))
  File &quot;D:\\Program Files\\Python\\Python311\\Lib\\site-packages\\matplotlib\\_api\\deprecation.py&quot;, line 454, in wrapper
    return func(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^
  File &quot;D:\\Program Files\\Python\\Python311\\Lib\\site-packages\\matplotlib\\pyplot.py&quot;, line 840, in figure
    manager = new_figure_manager(
              ^^^^^^^^^^^^^^^^^^^
  File &quot;D:\\Program Files\\Python\\Python311\\Lib\\site-packages\\matplotlib\\pyplot.py&quot;, line 383, in new_figure_manager
    _warn_if_gui_out_of_main_thread()
  File &quot;D:\\Program Files\\Python\\Python311\\Lib\\site-packages\\matplotlib\\pyplot.py&quot;, line 361, in _warn_if_gui_out_of_main_thread
    if _get_required_interactive_framework(_get_backend_mod()):
                                           ^^^^^^^^^^^^^^^^^^
  File &quot;D:\\Program Files\\Python\\Python311\\Lib\\site-packages\\matplotlib\\pyplot.py&quot;, line 208, in _get_backend_mod
    switch_backend(rcParams._get(&quot;backend&quot;))
  File &quot;D:\\Program Files\\Python\\Python311\\Lib\\site-packages\\matplotlib\\pyplot.py&quot;, line 271, in switch_backend
    backend_mod = importlib.import_module(
                  ^^^^^^^^^^^^^^^^^^^^^^^^
  File &quot;D:\\Program Files\\Python\\Python311\\Lib\\importlib\\__init__.py&quot;, line 126, in import_module
    return _bootstrap._gcd_import(name[level:], package, level)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File &quot;&lt;frozen importlib._bootstrap&gt;&quot;, line 1206, in _gcd_import
  File &quot;&lt;frozen importlib._bootstrap&gt;&quot;, line 1178, in _find_and_load
  File &quot;&lt;frozen importlib._bootstrap&gt;&quot;, line 1149, in _find_and_load_unlocked
  File &quot;&lt;frozen importlib._bootstrap&gt;&quot;, line 690, in _load_unlocked
  File &quot;&lt;frozen importlib._bootstrap_external&gt;&quot;, line 940, in exec_module
  File &quot;&lt;frozen importlib._bootstrap&gt;&quot;, line 241, in _call_with_frames_removed
  File &quot;D:\\Program Files\\Python\\Python311\\Lib\\site-packages\\matplotlib\\backends\\backend_tkagg.py&quot;, line 1, in &lt;module&gt;
    from . import _backend_tk
  File &quot;D:\\Program Files\\Python\\Python311\\Lib\\site-packages\\matplotlib\\backends\\_backend_tk.py&quot;, line 8, in &lt;module&gt;
    import tkinter as tk
ModuleNotFoundError: No module named &#39;tkinter&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：没有 <code>tkinter</code> 模块，因此无法使用对应的 GUI 后端。但 <code>tkinter</code> 不是扩展包，而是内置包。</p><p>其实是因为安装时没加 <code>Tcl/Tk Support</code>，执行安装包 modify 一下就行了。</p><p>问题解决。</p>`,11),o=[a];function s(r,d){return e(),n("div",null,o)}const p=i(l,[["render",s],["__file","tkinter-trap.html.vue"]]);export{p as default};
