<template>
  <div>
    <ul>
      <li v-for="item in $pagination.pages">
        <router-link :to="item.path">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>