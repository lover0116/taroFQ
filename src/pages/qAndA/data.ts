export default [
  {
    fq: "你如何对解决方案进行集成并交付给客户",
    ask: "按照模块自底向上，一次性集成测试完毕后，我们将所有方案进行集成和打包，交付给客户（线上或线下安装，可根据实际情况回答）"
  },
  {
    fq: "描述集成策略",
    ask: "《产品集成计划》中有产品集成策略，是按照模块自底向上的一次性集成策略。从构建软件的最低层次模块开始，逐步向上集成更高层次模块的过程。"
  },
  {
    fq: "描述集成环境",
    ask: "《产品集成计划》中有产品集成环境。环境包括服务器、软件、操作系统、工具等，由项目经理提供，开发人员搭建（有相关经验，可按照实际情况说）CPU: 32核 硬盘：1T及以上 内存：128G及以上 win10 数据库：MySQL 5.7 开发工具：IDEA"
  },
  {
    fq: "描述用于集成解决方案和组件的规程和准则",
    ask: "集成进入准则：代码调试通过，各模块能有效运行，环境已搭建好，接口兼容。集成退出准则：产品集成过程中发现缺陷中的所有高级和中级缺陷都要被修复，低级缺陷被修复90%以上。"
  },
  {
    fq: "在集成之前，如何检验每个组件已被正确识别并开发，并按照其需求和设计正常工作？",
    ask: "代码走查验证代码质量，单元测试来验证模块组件运行情况。识别到BUG交由编码人员改正。用集成检查单检查模块组件接口就绪状态"
  },
  {
    fq: "如何评估集成的组件，确保其符合解决方案的需求和设计",
    ask: "集成测试验证集成结果，识别到BUG交由编码人员修改，确保达到退出准则"
  },
  {
    fq: "如何开展产品集成？",
    ask: "根据《产品集成计划》，集成前确认产品集成环境的就绪情况，根据产品集成策略、顺序和准则集成组件，生成集成报告。结束后做集成测试"
  },
  {
    fq: "在整个开发生命周期中，如何评估并更新接口或连接的覆盖范围、完整性和前后一致性？",
    ask: "会对集成后的产品进行集成与系统测试。检查单产品集成后会进行集成与系统测试测试，主要测接口的兼容性，数据流向，数据格式是否正确。用检查单查验接口的结果和就绪状态"
  },
  {
    fq: "在集成之前，如何确认组件地接口或连接符合接口或连接描述",
    ask: "在集成前，会通过单元测试和集成检查单检查所有接口就绪情况，对接口实施功能审查，记录下不符合的接口，并沟通解决。"
  },
  {
    fq: "如何评价集成组件的接口或连接的兼容性",
    ask: "产品集成后会进行集成与系统测试，主要测接口的兼容性（功能，可靠性），数据流向，数据格式是否正确。"
  },
  {
    fq: "遵循相应的过程了嘛？如何体现？问题：你是如何了解你的工作职责和工作过程相关的内容？在哪里可以看到这些工作职责和工作流程的文件？",
    ask: "EPG建立了标准过程文件库，我们可以通过相应的权限去访问这个文件，这些标准文件就介绍了我们的工作职责和工作流程。"
  },
  {
    fq: "为开发过程提供了哪些资源（人员，预算，工具）？",
    ask: "项目团队成员，包括项目经理、开发人员、测试人员。项目预算。工具：办公环境，开发工具包括集成开发环境（IDE）、版本控制系统"
  },
  {
    fq: "您（过程参与者）遵循什么过程？",
    ask: "我遵循产品集成过程、产品集成指南"
  },
  {
    fq: "您（流程参与者）自己的工作是否有遵循组织工作过程？ -您如何在工作中应用该过程？问题：您用来计划，管理和执行工作的过程关键要素是什么？您监督项目绩效（或支持小组绩效）的一些关键度量数据是什么？标准流程可以进行裁剪吗？",
    ask: "1.在计划，管理，工作中，我们会参考组织制定的过程规范，其中的模板，过程，指南。熟练掌握编程语言，编写可读性高，可维护性强的代码。2.工作量，工作进度，缺陷率，测试覆盖率。3.EPG有给我们提供《裁剪指南》，明确说明了哪些可以裁剪，哪些不能进行裁剪，，如果过程被认为很繁琐，附加值低，这种情况我们需要向EPG反馈，由EPG去更新过程。"
  },
  {
    fq: "如何检查（过程参与者）对过程是否遵循？",
    ask: "QA会检查、审计我们对规范的遵循程度。"
  },
  {
    fq: "是否有提交过关于过程改进的建议和相关信息？内容是什么？",
    ask: "编码规范中缺少C#，建议添加C#的编码规范"
  },
  {
    fq: "能力有没有量化？",
    ask: "培训负责人每年都会填写人员能力评价表和技能分析表，用数据来看我们能力是否有提升。"
  },
  {
    fq: "QA审计不符合项？",
    ask: "产品集成计划组织了评审，但未保留评审记录。"
  },
  {
    fq: "觉得公司好的地方和需要改进的地方？",
    ask: "好的：上下班时间弹性半小时。改进的：可以在企业微信上增加员工通讯录，方便相关人员查找联系。"
  }
];
