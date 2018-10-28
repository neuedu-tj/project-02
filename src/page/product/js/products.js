
// Vue.http.options.xhr = { withCredentials: true }

var product = new Vue({


    el : "#product" ,
    data : {
        products : [],
        product : {'pid':0 , 'pname' : '' , 'price':0 , 'description':'','imgs':''}
    } ,

    mounted : function() {
        this.$nextTick(function(){
            this.init();
        })
    } ,

    methods : {

        init : function(){
            var _this = this;

            this.$http.get("http://localhost:8088/mvc01/product").then(function(res){
                _this.products = res.data;
            });
        } ,
        saveProduct : function() {

            var _this = this;

            this.$http.post("http://localhost:8088/mvc01/product", this.product , {emulateJSON : true}).then(function(res){

                _this.products.push(res.body);
                _this.product = {'pid':0 , 'pname' : '' , 'price':0 , 'description':'','imgs':''};
            })


        },
        removeProduct : function(data){
           var _this = this;

           this.$http.delete("http://localhost:8088/mvc01/product/"+data.pid).then(function(res){

               if(res.body>0) {
                   var index = _this.products.indexOf(data);
                   _this.products.splice(index , 1);
               } else {
                   alert("删除失败");
               }
           });
        }

    }

})