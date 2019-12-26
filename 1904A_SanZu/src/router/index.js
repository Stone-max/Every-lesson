import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Home from '@/components/Home/Home'
// 日历
import Home_day from '@/components/Home/Home_day'
// 讲师详情
import Lecturer_details from '@/components/subscribe/Lecturer_details'

// 课程
import Course from '@/components/Course/Course'
// 课程搜索
import Course_search from '@/components/Course/course_search'
// 课程详情
import Course_details from '@/components/Course/Course_details'
// 确定订单
import Course_apply from '@/components/Course/Course_apply'

// 约课
import Subscribe from '@/components/Subscribe/Subscribe'
// 一对一辅导
import Subscribe_one from '@/components/Subscribe/Subscribe_one'
// 预约课程
import Order_course from '@/components/Subscribe/Order_course'

// 练习
import Practise from '@/components/Practise/Practise'
import Exam_Practise from '@/components/Practise/Exam_Practise'
import Test_practise from '@/components/Practise/Test_practise'
import Mock_exam from '@/components/Practise/Mock_exam'
import Errors_practise from '@/components/Practise/Errors_practise'
import Appraisal_record from '@/components/Practise/Appraisal_record'
import Exercises_collect from '@/components/Practise/Exercises_collect'
import Secetiveity from '@/components/Practise/Secetiveity'

// 我的
import Mine from '@/components/Mine/Mine'
import Mine_home from '@/components/Mine/Mine_home'
import Mine_login from '@/components/Mine/Mine_login'
import Mine_sex from '@/components/Mine/Mine_sex'
import Mine_loginthen from '@/components/Mine/Mine_loginthen'
import Mine_setmi from '@/components/Mine/Mine_setmi'
import Mine_attention from '@/components/Mine/Mine_attention'
import Mine_collect from '@/components/Mine/Mine_collect'
import Personal_details from '@/components/Mine/Personal_details'
import Mine_set from '@/components/Mine/Mine_set'
import Mine_nicheng from '@/components/Mine/Mine_nicheng'
import Mine_xueke from '@/components/Mine/Mine_xueke'
import Popup from '@/components/Practise/Popup'


Vue.use(Router)

export default new Router({
  routes: [
    {
      //主页
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      //主页
      path: '/Mine_xueke',
      name: 'Mine_xueke',
      component: Mine_xueke
    },
    {
      //主页
      path: '/Popup',
      name: 'Popup',
      component: Popup
    },
    {
      //主页
      path: '/Mine_nicheng',
      name: 'Mine_nicheng',
      component: Mine_nicheng
    },
    {
      //日历
      path: '/Home_day',
      name: 'Home_day',
      component: Home_day
    },
    {
      //讲师详情
      path: '/Lecturer_details',
      name: 'Lecturer_details',
      component: Lecturer_details
    },
    {
      //课程
      path: '/Course',
      name: 'Course',
      component: Course
    },
    {
      // 课程搜索
      path: '/Course_search',
      name: 'Course_search',
      component: Course_search
    },
    {
      // 课程详情
      path: '/Course_details',
      name: 'Course_details',
      component: Course_details
    },
    {
      // 确认订单
      path: '/Course_apply',
      name: 'Course_apply',
      component: Course_apply
    },
    {
      // 约课
      path: '/Subscribe',
      name: 'Subscribe',
      component: Subscribe
    },
    {
      // 一对一辅导
      path: '/Subscribe_one',
      name: 'Subscribe_one',
      component: Subscribe_one
    },
    {
      // 预约详情
      path: '/Order_course',
      name: 'Order_course',
      component: Order_course
    },
    {
      // 练习
      path: '/Practise',
      name: 'Practise',
      component: Practise
    },
    {
      // 题库选择
      path: '/Exam_Practise',
      name: 'Exam_Practise',
      component: Exam_Practise
    },
    {
      // 题库选择
      path: '/Secetiveity',
      name: 'Secetiveity',
      component: Secetiveity
    },
    {
      // 套卷练习
      path: '/Test_practise',
      name: 'Test_practise',
      component: Test_practise
    },
    {
      // 仿真练习
      path: '/Mock_exam',
      name: 'Mock_exam',
      component: Mock_exam
    },
    {
      // 错题练习
      path: '/Errors_practise',
      name: 'Errors_practise',
      component: Errors_practise
    },
    {
      // 测评记录
      path: '/Appraisal_record',
      name: 'Appraisal_record',
      component: Appraisal_record
    },
    {
      // 习题收藏
      path: '/Exercises_collect',
      name: 'Exercises_collect',
      component: Exercises_collect
    },
    {
      // 我的
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      // 我的页面
      path: '/Mine_home',
      name: 'Mine_home',
      component: Mine_home
    },
    {
      // 我的登陆
      path: '/Mine_login',
      name: 'Mine_login',
      component: Mine_login
    },
    {
      // 我的登陆_设置密码
      path: '/Mine_loginthen',
      name: 'Mine_loginthen',
      component: Mine_loginthen
    },
    {
      // 我的关注
      path: '/Mine_attention',
      name: 'Mine_attention',
      component: Mine_attention
    },
    {
      // 我的性别
      path: '/Mine_sex',
      name: 'Mine_sex',
      component: Mine_sex
    },
    {
      // 我的收藏
      path: '/Mine_collect',
      name: 'Mine_collect',
      component: Mine_collect
    },
    {
      // 我的设置
      path: '/Mine_set',
      name: 'Mine_set',
      component: Mine_set
    },
    {
      // 我的设置密码
      path: '/Mine_setmi',
      name: 'Mine_setmi',
      component: Mine_setmi
    },
    {
      // 个人信息
      path: '/Personal_details',
      name: 'Personal_details',
      component: Personal_details
    },
    // 默认路由
    {
      path: "/",
      redirect: "/Home"
    }
  ]
})
