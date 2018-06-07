!function () {
    var view = View("#siteMessage");

    var model = Model({
        /** leanCloud 初始化 **/

        keyId: {
            appId: 'dBiiz9LeNIyQjCkyCCqbhF2e-gzGzoHsz',
            appKey: 'uIh8KspCAegHJ78l58DpPzUV'
        },
        resourceName: "Messages",

    })

    var controller = Controller({
        form: null,
        message: null,

        init: function (view, model) {
            //this为封装后的controller object
            this.form = view.querySelector("form")
            this.loadHistoryMessage();

        },

        bindEvent: function () {
            var form = this.form;
            form.addEventListener("submit", (e)=> {
                e.preventDefault();
                this.getInputMessage()
                this.saveInputMessage();
            })
        },

        getInputMessage: function () {
            var content = this.form.querySelector("input[name=content]").value;
            var name= this.form.querySelector("input[name=name]").value;
            this.message = {
                name: name,
                content: content,
            }
        },

        saveInputMessage: function () {
            var {name, content} = this.message;
            if(name && content){
                this.model.save(this.message);
                this.reloadMessage();
            }else {
                alert("请填入完整的信息");
            }

        },

        reloadMessage: function () {
            var message = this.message;
            var ol = this.view.querySelector(".messageList");
            var li = document.createElement("li");
            li.innerHTML = `${message.name} : ${message.content}`;
            ol.append(li);
        },

        loadHistoryMessage: function () {
            this.model.fetch().then((m) => {
                let array = m.map((item)=> item.attributes);
                array.reverse().forEach((item)=>{
                    var li = document.createElement("li");
                    li.innerHTML = `${item.name} : ${item.content}`;
                    this.view.querySelector(".messageList").append(li);
                })
            })
        }

    })

    controller.init(view, model)
}.call()