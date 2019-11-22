<template>
  <div class="app" :style="size">
    <div class="rect" :class="drop?'drop':''">
      <Decorate/>
      <div class="screen">
        <div class="panel">
          <Matrix :propMatrix="matrix" :cur="cur" :reset="reset" />
          <Logo :cur="!!cur" :reset="reset" />
          <div class="state">
            <Point :cur="!!cur" :max="max" :point="points" />
            <p>{{pContent}}</p>
            <Number :number='cur ? clearLines : startLines' />
            <LevelChoice :degree = "startLines" :maxNumber = "10" :minNumber = "0" :nameKey = "stringStartLine"/>            
            <p>{{level}}</p>
            <Number :number='cur?speedRun:speedStart' :length="1" />
            <LevelChoice :degree = "speedStart" :maxNumber = "6" :minNumber = "1" :nameKey = "stringSpeedStart"/>
            <p>{{nextText}}</p>
            <Next :data="next" />
            <div class="bottom">
              <Music :data="music" />
              <Pause :data="pause" />
              <Number :propTime="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Keyboard :filling='filling' />
    <Guide/>
  </div>
</template>

<style lang="less">
@import './app.less';
@import './loader.less';
</style>

<script src="./app.js"></script>

