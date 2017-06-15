// 1.模拟数据(把静态的任务列表数据,替换成模拟的数据)
// 任务是多条的,所以要数组,一条任务包含很多信息,所以要用对象,一个对象有多个元素
var list = [
    {
        title:"吃饭睡觉打豆豆",
        isChecked:false,
    },
    {
        title:"学习Vue.js",
        isChecked:true,
    }
]

// 2.实例化
new Vue({
    // 挂载点(在挂载点内可以任意使用vue的语法)
    el:".main",
    data:{
        // 任务列表数据代理
        tdlist:list,
        // 输入框的内容(默认为空),利用双向数据绑定
        todo:""
    },
    methods:{
        // 需求1:添加任务
        addTodo:function(ev){
            if(this.todo){
                this.tdlist.push({
                    title:this.todo,
                    isChecked:false
                })
                // 添加完成,让输入框里的内容重置为空
                this.todo = "";
            }else{
                alert("请输入任务内容!");
            }
            
        }
    }
})