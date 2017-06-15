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
            
        },
        // 需求4:删除任务
        delTodo:function(item){
            // console.log(item);
            /*
                删除原理
                1.点击删除按钮,提交当前这条数据
                2.函数接收这条数据,找出这条数据在数组里的索引
                3.通过索引,在数组里去掉当前这条数据
            */
            // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
            var index = this.tdlist.indexOf(item);
            // splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
            this.tdlist.splice(index,1);
        }
    }
})