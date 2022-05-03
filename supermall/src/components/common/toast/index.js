/* toast弹窗插件 */
//import Toast from './ToastToast.vue'
//const obj = {}
/**install可用于开发新的插件及全局注册组件
 * install(Vue,option){组件，指令，混入，挂载vue原型} 
 * 第一个参数是vue的构造器，第二个参数是可选的选项对象*/  
//obj.install = function (Vue) {
    //document.body.appendChild(Toast.$el)
    //1.创建组件构造器
    //const toastContrustor = (Toast)
    //2.new的方式，根据组件构造器，可以创建出来一个组件对象
    //const toast = new toastContrustor()
    //3.将组件对象，手动挂载到某一个元素上
    //toast.$mount(document.createElement('div')) /* vue3已经废除这种写法 */
    //Vue.createApp(toast).mount(document.createElement('div'))
    //4.toast.$el对应的就是div
    //document.body.appendChild(toast.$el)
    // 最后将Toast挂载到Vue的原型上
    //Vue.prototype.$mytoast = toast;
    //app.config.globalProperties.$toast = toast
//}
//export default obj

/* import Toast from './ToastToast.vue'
const obj = {}
obj.install = function (Vue) {
    document.body.appendChild(Toast.$el)
    const app = createApp(App)
    app.config.globalProperties.$toast = Toast
}
export default obj */