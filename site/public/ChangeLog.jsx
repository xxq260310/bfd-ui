import React from 'react'
import Version from './Version'
import Pre from './Pre'

function ChangeLog() {
  return (
    <div>
      <Version version="0.0.22" date="2016-04-16">
        <p>新增组件：</p>
        <ul>
          <li>可清空的输入框：ClearableInput</li>
          <li>确认提示：Confirm</li>
        </ul>
        <p>其他：</p>
        <ol>
          <li>修复当页面没有垂直滚动条时，Modal 打开时抖动的问题 <a href="http://git.baifendian.com/front-end/bfd-ui/issues/40">#40</a></li>
          <li>Fix <a href="http://git.baifendian.com/front-end/bfd-ui/issues/39">#39</a></li>
          <li>修复 Select 只有一个 Option 报错的问题 <a href="http://git.baifendian.com/front-end/bfd-ui/issues/37">#37</a></li>
          <li>Pie 新增 colors、legend 属性 <a href="http://git.baifendian.com/front-end/bfd-ui/issues/29">#29</a></li>
          <li>Nav 新增 onItemClick 属性，回调参数为 NavItem 的 props</li>
          <li>Modal 使用 open、handleClose 来控制开关状态，原有 refs 方式仍然支持</li>
          <li>Tree 添加 onChange 属性，同步 data 状态</li>
        </ol>
      </Version>
      <Version version="0.0.21" date="2016-04-08">
        <ol>
          <li>Select 更新禁用状态样式 <a href="http://git.baifendian.com/front-end/bfd-ui/issues/34">#34</a></li>
          <li>Select 下拉支持滚动条 <a href="http://git.baifendian.com/front-end/bfd-ui/issues/31">#31</a></li>
          <li>修复 DataTable howRow 无效的问题 <a href="http://git.baifendian.com/front-end/bfd-ui/issues/26">#26</a></li>
          <li>修复 Datepicker 跨月高亮的问题 <a href="http://git.baifendian.com/front-end/bfd-ui/issues/25">#25</a></li>
          <li>修复 Form 错误提示不正常消失的问题 <a href="http://git.baifendian.com/front-end/bfd-ui/issues/24">#24</a></li>
          <li>修复 Select 多选几次后，偶尔就会出现空白的问题 <a href="http://git.baifendian.com/front-end/bfd-ui/issues/17">#17</a></li>
          <li>
            <p>Tree、SelectTree 修正为按需调用（原有调用方式仍然支持）</p>
            <Pre>{`
import Tree from 'bfd-ui/lib/Tree/Tree'
import SelectTree from 'bfd-ui/lib/Tree/SelectTree'`}</Pre>
          </li>
          <li>修复 Tabs 组件 onChange 不触发的问题</li>
          <li>修复 DateRange 组件 onSelect 不触发的问题</li>
          <li>Radio 添加 disabled 属性，hover 与 active 样式覆盖到后面的文本；RadioGroup 组件添加 .bfd-radio-group 类</li>
          <li>Checkbox 添加 disabled 属性，hover 与 active 样式覆盖到后面的文本</li>
          <li>message 组件文字颜色、背景色、提示框宽度调整</li>
          <li>DataTable data 属性支持自动分页</li>
          <li>分页样式、布局调整</li>
          <li>LineChart 样式调整</li>
        </ol>
      </Version>
      <Version version="0.0.20" date="2016-04-01">
        <p>组件：</p>
        <ul>
          <li>线图：LineChart</li>
          <li>饼图：PieChart</li>
          <li>散点图：ScatterPlot</li>
          <li>气泡图：BubbleChart</li>
          <li>环形百分比：Percentage</li>
          <li>模态框：Modal, ModalHeader, ModalBody</li>
          <li>日期选择：DatePicker, DateRange</li>
          <li>导航：Nav, NavItem</li>
          <li>选项卡：Tabs, TabList, Tab, TabPanel</li>
          <li>全局提示：Message</li>
          <li>数据表格&分页：DataTable</li>
          <li>表单：Form, FormItem</li>
          <li>单选框：Radio, RadioGroup</li>
          <li>复选框：Checkbox, CheckboxGroup</li>
          <li>下拉框：Select</li>
          <li>AJAX加载管理：Fetch</li>
          <li>下拉菜单：Dropdown, DropdownToggle, DropdownMenu</li>
          <li>穿梭框：Transfer</li>
          <li>树：Tree, SelectTree</li>
          <li>查询下拉框：SearchSelect</li>
        </ul>
      </Version>
    </div>
  )
}

export default ChangeLog