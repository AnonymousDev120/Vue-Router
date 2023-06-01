<template>
  <header>
    <h1 class="site_title">
      <RouterLink :to="{ name: 'home' }">Pizza Planet</RouterLink>
    </h1>
    <nav>
      <RouterLink :to="{ name: 'home' }" class="link">Home</RouterLink>
      <RouterLink :to="{ name: 'menu' }" class="link">Menu</RouterLink>
      <RouterLink :to="{ name: 'about' }" class="link">About</RouterLink>
      <RouterLink :to="{ name: 'admin' }" class="link">Admin</RouterLink>
    </nav>
    <h2>No.1 Place For Pizza</h2>
  </header>
</template>
