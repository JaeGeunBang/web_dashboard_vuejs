<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link :to= "'/'" >  
            <img @click="setPwd('home')" href="#" class="logo" src="./assets/logo.png" width="42" height="42">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" :to="'/TotalTrafficChart?date_type=' + date_type + '&start_date=' + start_date + '&end_date=' + end_date" >  
                        <a @click="setPwd('TotalTrafficChart')"> 전체 트래픽 통계 </a> 
                    </router-link>
                </li>
                <a class="nav-link dropdown-toggle" href="#" v-dropdown:search> 
                    검색줌 통계
                </a>
                <dropdown name="search">
                    <router-link class="dropdown-item" :to="'/TotalTrafficChart?date_type=' + date_type + '&start_date=' + start_date + '&end_date=' + end_date" >  
                        <a @click="setPwd('TrafficChart')"> 트래픽 </a> 
                    </router-link>
                    <router-link class="dropdown-item" :to="'/PcSearchChart?date_type=' + date_type + '&start_date=' + start_date + '&end_date=' + end_date" >
                        <a @click="setPwd('PcSearchChart')"> 서치스 </a>
                    </router-link>
                    <router-link class="dropdown-item" :to="'/MbSearchChart?date_type=' + date_type + '&start_date=' + start_date + '&end_date=' + end_date" >
                        <a @click="setPwd('MbSearchChart')"> 모바일 서치스 </a> 
                    </router-link>
                </dropdown>
            </ul>
        </div>
    </nav>
    <div class="container-fluid">
        <div class="row mt-2">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link :to= "'/'" >  
                                <a @click="setPwd('home')"> Home </a> 
                            </router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page"> {{ main }} </li>
                        <template v-if="sub">
                            <li class="breadcrumb-item active" aria-current="page"> {{ sub }}</li>
                        </template>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <div>
                                <input type="radio" id="dayily" name="drone" value="daily" v-model="date_type">
                                <label for="dayily">일간</label>
                            </div>
                            <div>
                                <input type="radio" id="weekly" name="drone" value="weekly" v-model="date_type">
                                <label for="weekly">주간</label>
                            </div>
                            <div>
                                <input type="radio" id="monthly" name="drone" value="monthly" v-model="date_type">
                                <label for="monthly">월간</label>
                            </div>
                            시작 날짜 <input class="form-control" v-model="start_date" placeholder="시작 날짜 (yyyy-mm-dd)">
                            종료 날짜 <input class="form-control" v-model="end_date" placeholder="종료 날짜 (yyyy-mm-dd)">
                            <br>
                            <!-- 현재 페이지가 '/' 일 경우 조회 버튼 비활성화 -->
                            <template v-if="this.curPage=='/'">
                                <router-link :to="this.curPage + '?date_type=' + date_type + '&start_date=' + start_date + '&end_date=' + end_date" > 
                                    <button class="btn btn-primary" disabled> 조회 </button>
                                </router-link>
                            </template>
                            <template v-if="this.curPage!='/'">
                                <router-link :to="this.curPage + '?date_type=' + date_type + '&start_date=' + start_date + '&end_date=' + end_date" > 
                                    <button class="btn btn-primary" > 조회 </button>
                                </router-link>
                            </template>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <router-view :key="$route.fullPath" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import Vue      from 'vue'
import Dropdown from 'vue-js-dropdown'
 
Vue.use(Dropdown)

export default {
  name: 'App',
  data() {
      return {
          main: '',
          sub: '',
          curPage: '/',
          date_type: 'daily',
          start_date: '2018-12-01',
          end_date: '2018-12-31'
      }
  },
  methods: {
      setPwd(newPage) {
          if (newPage == 'TotalTrafficChart') {
              this.main = '전체 트래픽 통계',
              this.sub = ''
              this.curPage = '/TotalTrafficChart'
          }
          else if (newPage == 'TrafficChart') {
              this.main = '검색줌 통계',
              this.sub = '트래픽'
              this.curPage = '/TotalTrafficChart'
          }
          else if (newPage == 'PcSearchChart') {
              this.main = '검색줌 통계',
              this.sub = '서치스'
              this.curPage = '/PcSearchChart'
          }
          else if (newPage == 'MbSearchChart') {
              this.main = '검색줌 통계',
              this.sub = '모바일 서치스'
              this.curPage = '/MbSearchChart'
          }
          else if (newPage == 'home') {
              this.main = '',
              this.sub = ''
              this.curPage = '/'
          }
      }
  }
}

</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';

</style>
