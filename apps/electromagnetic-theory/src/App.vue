<script setup lang="ts">
import { useMathJax } from './composables/useMathJax'

useMathJax()
</script>

<template>
  <div :class="['container mx-auto bg-white py-16']">
    <h1 :class="['text-4xl font-bold text-center pb-8']">电磁学基本理论</h1>
    <h2 :class="['text-2xl font-bold pb-2']">库仑定律</h2>
    <p :class="['text-lg leading-relaxed pb-2']">标量形式</p>
    <p>
      $$
      F = k\frac{q_1q_2}{r^2}
      = \frac{1}{4\pi\epsilon_0}\frac{q_1q_2}{r^2}
      = q E
      $$
    </p>
    <p>
      $$
      E = \frac{F}{q_p}
      = \frac{1}{4\pi\epsilon_0}\frac{q_s}{r^2}
      $$
    </p>
    <p :class="['text-lg leading-relaxed pb-2']">矢量形式</p>
    <p>
      $$
      \mathbf{F} = k\frac{q_1q_2}{r^2}\mathbf{\hat{r}}
      = \frac{1}{4\pi\epsilon_0}\frac{q_1q_2}{r^2}\mathbf{\hat{r}}
      $$
    </p>
    <p>
      $$
      \mathbf{F}_{12} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{|\mathbf{r}_2 - \mathbf{r}_1|^3} (\mathbf{r}_2 -
      \mathbf{r}_1)
      $$
    </p>
    <p>
      $$
      \mathbf{E} = \frac{\mathbf{F}}{q}
      $$
    </p>

    <h2 :class="['text-2xl font-bold pb-2']">毕奥-萨伐尔定律</h2>
    <p>
      $$
      d\mathbf{B} = \frac{\mu_0}{4\pi} \frac{I d\mathbf{l} \times \mathbf{\hat{r}}}{r^2}
      $$
    </p>
    <table :class="['table-fixed w-5/12 border-collapse border border-black mx-auto my-6']">
      <thead>
        <tr :class="['h-16']">
          <th :class="['border border-black text-center w-1/2']">电流构型</th>
          <th :class="['border border-black text-center w-1/2']">磁感应强度</th>
        </tr>
      </thead>
      <tbody>
        <tr :class="['h-16']">
          <td :class="['border border-black px-4 py-2 text-center w-1/2']">直导线</td>
          <td :class="['border border-black px-4 py-2 text-center w-1/2']">$B = \displaystyle\frac{\mu_0 I}{2\pi r}$
          </td>
        </tr>
        <tr :class="['h-16']">
          <td :class="['border border-black px-4 py-2 text-center w-1/2']">圆环</td>
          <td :class="['border border-black px-4 py-2 text-center w-1/2']">$B = \displaystyle\frac{\mu_0 I}{2R}$</td>
        </tr>
        <tr :class="['h-16']">
          <td :class="['border border-black px-4 py-2 text-center w-1/2']">螺线管</td>
          <td :class="['border border-black px-4 py-2 text-center w-1/2']">$B = \displaystyle\mu_0 n I$</td>
        </tr>
      </tbody>
    </table>

    <h2 :class="['text-2xl font-bold pb-2']">法拉第定律</h2>
    <p>
      $$
      \begin{cases}\,
      \begin{aligned}
      \mathcal{E} &= -\frac{d\Phi}{dt} = -\frac{d}{dt}\iint_S \mathbf{B} \cdot d\mathbf{S}\\[8pt]
      \mathcal{E} &= \oint_C \mathbf{E} \cdot d\mathbf{l}
      \end{aligned}
      \end{cases}
      $$</p>
    <p>
      $$
      \oint_C \mathbf{E} \cdot d\mathbf{l} = -\iint_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{S}
      $$
    </p>

    <h2 :class="['text-2xl font-bold pb-2']">高斯定律</h2>
    <p :class="['text-lg leading-relaxed pb-2']">电</p>
    <p>
      $$
      \Phi_E
      = \oiint_S \mathbf{E} \cdot d\mathbf{S} = \frac{1}{\epsilon_0} \sum q
      = \frac{1}{\epsilon_0} \iiint_V \rho\, dV
      $$
    </p>
    <p :class="['text-lg leading-relaxed pb-2']">磁</p>
    <p>
      $$
      \Phi_M
      = \oiint_S \mathbf{B} \cdot d\mathbf{S} = 0
      $$
    </p>
    <h2 :class="['text-2xl font-bold pb-2']">介电常数</h2>
    <p>
      $$
      \epsilon = K_E \epsilon_0
      $$
    </p>

    <h2 :class="['text-2xl font-bold pb-2']">安培定律</h2>
    <p :class="['text-lg leading-relaxed pb-2']">安培环路定律</p>
    <p>
      $$
      \oint_C \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\text{encl}}

      = \mu_0 \iint_S \mathbf{J} \cdot d\mathbf{S}
      $$
    </p>
    <p :class="['text-lg leading-relaxed pb-2']">位移电流</p>
    <p>
      $$
      Q = \epsilon_0 \Phi_E
      $$
    </p>
    <p>
      $$
      I_{\text{d}} = \frac{dQ}{dt} = \epsilon_0 \frac{d\Phi_E}{dt}
      $$
    </p>
    <p :class="['text-lg leading-relaxed pb-2']">修正</p>
    <p>
      $$
      I_{\text{encl}} = I_c + I_d
      = \iint_S \mathbf{J} \cdot d\mathbf{S} + \epsilon_0 \frac{d}{dt} \iint_S \mathbf{E} \cdot d\mathbf{S}
      $$
    </p>
    <p>
      $$
      \oint_C \mathbf{B} \cdot d\mathbf{l}
      = \mu_0 \iint_S \left( \mathbf{J} + \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} \right) \cdot d\mathbf{S}
      $$
    </p>
    <h2 :class="['text-2xl font-bold pb-2']">相对磁导率</h2>
    <p>
      $$
      \mu = K_M \mu_0
      $$
    </p>

    <h2 :class="['text-2xl font-bold pb-2']">麦克斯韦方程组</h2>
    <p :class="['text-lg leading-relaxed pb-2']">自由空间：真空并且 $\rho, \mathbf{J}$ 值为零</p>
    <p :class="['text-lg leading-relaxed pb-2']">积分形式</p>
    <p>
      $$
      \begin{aligned}
      \oint_C \mathbf{E} \cdot d\mathbf{l} &= -\iint_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{S}\\[8pt]
      \oint_C \mathbf{B} \cdot d\mathbf{l} &= \mu_0 \epsilon_0 \iint_S \frac{\partial \mathbf{E}}{\partial t} \cdot d\mathbf{S}\\[8pt]
      \oiint_S \mathbf{E} \cdot d\mathbf{S} &= 0\\[8pt]
      \oiint_S \mathbf{B} \cdot d\mathbf{S} &= 0
      \end{aligned}
      $$
    </p>
    <p :class="['text-lg leading-relaxed pb-2']">微分形式</p>
    <p>
      $$
      \begin{aligned}      
      \boldsymbol{\nabla} \times \mathbf{E} &= - \frac{\partial \mathbf{B}}{\partial t}\\[8pt]
      \boldsymbol{\nabla} \times \mathbf{B} &= \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}\\[8pt]
      \boldsymbol{\nabla} \cdot \mathbf{E} &= 0\\[10pt]
      \boldsymbol{\nabla} \cdot \mathbf{B} &= 0
      \end{aligned}
      $$
    </p>
    <p :class="['text-lg leading-relaxed pb-2']">微分形式展开</p>
    <p>Faraday’s Law:</p>
    <p>
      $$
      \begin{aligned}
      \frac{\partial E_z}{\partial y} - \frac{\partial E_y}{\partial z} &= - \frac{\partial B_x}{\partial t}\\[8pt]
      \frac{\partial E_x}{\partial z} - \frac{\partial E_z}{\partial x} &= - \frac{\partial B_y}{\partial t}\\[8pt]
      \frac{\partial E_y}{\partial x} - \frac{\partial E_x}{\partial y} &= - \frac{\partial B_z}{\partial t}
      \end{aligned}
      $$
    </p>
    <p>Ampères’s Law:</p>
    <p>
      $$
      \begin{aligned}
      \frac{\partial B_z}{\partial y} - \frac{\partial B_y}{\partial z} &= \mu_0 \epsilon_0 \frac{\partial E_x}{\partial t}\\[8pt]
      \frac{\partial B_x}{\partial z} - \frac{\partial B_z}{\partial x} &= \mu_0 \epsilon_0 \frac{\partial E_y}{\partial t}\\[8pt]
      \frac{\partial B_y}{\partial x} - \frac{\partial B_x}{\partial y} &= \mu_0 \epsilon_0 \frac{\partial E_z}{\partial t}
      \end{aligned}
      $$
    </p>
    <p>Gauss’s Law:</p>
    <p>
      $$
      \frac{\partial E_x}{\partial x} + \frac{\partial E_y}{\partial y} + \frac{\partial E_z}{\partial z} = 0
      $$
    </p>
    <p>
      $$
      \frac{\partial B_x}{\partial x} + \frac{\partial B_y}{\partial y} + \frac{\partial B_z}{\partial z} = 0
      $$
    </p>

    <h2 :class="['text-2xl font-bold pb-2']">矢量分析</h2>
    <p :class="['text-lg leading-relaxed pb-2']">Del 算子</p>
    <p>
      $$
      \boldsymbol{\nabla} = \mathbf{i} \frac{\partial}{\partial x} + \mathbf{j} \frac{\partial}{\partial y} + \mathbf{k} \frac{\partial}{\partial z} 
      $$
    </p>
    <p :class="['text-lg leading-relaxed pb-2']">给定电场</p>
    <p>
      $$
      \mathbf{E} = E_x \mathbf{i} + E_y \mathbf{j} + E_z \mathbf{k}
      $$
    </p>
    <p :class="['text-lg leading-relaxed pb-2']">散度</p>
    <p>
      $$
      \text{div}\, \mathbf{E} = \boldsymbol{\nabla} \cdot \mathbf{E} = \frac{\partial E_x}{\partial x} + \frac{\partial E_y}{\partial y} + \frac{\partial E_z}{\partial z}
      $$
    </p>
    <p>
      $$
      \boldsymbol{\nabla} \cdot \mathbf{E} 
      = \lim_{\Delta{V} \to 0} \frac{1}{\Delta{V}} \oiint_S \mathbf{E} \cdot d\mathbf{S} 
      = \lim_{\Delta{V} \to 0} \frac{1}{\epsilon_0} \iiint_V \rho\, dV
      = \frac{\rho}{\epsilon_0}
      $$
    </p>
    <p>
      $$
      \boldsymbol{\nabla} \cdot \mathbf{B} = 0
      $$ 
    </p>
    <p :class="['text-lg leading-relaxed pb-2']">旋度</p>
    <p>
      $$
      \begin{aligned}
      \text{curl}\, \mathbf{E} = \boldsymbol{\nabla} \times \mathbf{E} &= \left( \mathbf{i} \frac{\partial}{\partial x} + \mathbf{j} \frac{\partial}{\partial y} + \mathbf{k} \frac{\partial}{\partial z} \right) \times \left( E_x \mathbf{i} + E_y \mathbf{j} + E_z \mathbf{k} \right)
      \\[8pt]
      &= \left( \frac{\partial E_z}{\partial y} - \frac{\partial E_y}{\partial z} \right) \mathbf{i} + \left( \frac{\partial E_x}{\partial z} - \frac{\partial E_z}{\partial x} \right) \mathbf{j} + \left( \frac{\partial E_y}{\partial x} - \frac{\partial E_x}{\partial y} \right) \mathbf{k} 
      \end{aligned}
      $$
    </p>
    <p>
      $$
      \boldsymbol{\nabla} \times \mathbf{E} = \lim_{\Delta{S} \to 0} \frac{1}{\Delta{S}} \oint_C \mathbf{E} \cdot d\mathbf{l} = - \lim_{\Delta{S} \to 0} \frac{1}{\Delta{S}} \iint_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{S} = - \frac{\partial \mathbf{B}}{\partial t}
      $$
    </p>
    <p>
      $$
      \boldsymbol{\nabla} \times \mathbf{B} = \lim_{\Delta{S} \to 0} \frac{1}{\Delta{S}} \oint_C \mathbf{B} \cdot d\mathbf{l} = \mu_0 \epsilon_0 \lim_{\Delta{S} \to 0} \frac{1}{\Delta{S}} \iint_S \frac{\partial \mathbf{E}}{\partial t} \cdot d\mathbf{S} = \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
      $$
    </p>
  </div>
</template>

<style scoped></style>
