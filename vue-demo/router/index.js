import Vue from 'vue'//导入Vue对象
import Router from 'vue-router'//导入Router对象
import HelloWorld from '@/components/HelloWorld'//导入helloworld组件
import Test from '@/view/test'
import First from '@/view/first'
import Second from '@/view/second'
import Good from '@/view/good'

Vue.use(Router)//创建Router对象

export default new Router({//定义路由表
  routes: [
    {
      path: '/', //路由的路径
      name: 'HelloWorld', //路由的名称
      // component: HelloWorld //路由显示的组件  router-view位置显示的是HelloWorld组件
      component: HelloWorld
    },
    {
      // path: '/test/:testId/:testName',
      path: '/test',
      name: 'test',
      component: Test,
      children: [{
        path: 'first',
        name: 'first',
        component: First
      },
      {
        path: 'second',
        name: 'second',
        component: Second
      },
    ]
    },
    {
      path: '/good',
      name: 'good',
      component: Good
    },
    {
      path: '/test/first',
      name: 'good',
      component: First
    },
  ]
})
