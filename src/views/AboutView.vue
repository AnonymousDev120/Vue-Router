<template>
  <div class="about">
    <section class="intro">
      <div class="info-text-wrapper">
        <h3>Quality pizza</h3>
        <p class="info_text">Best quality ingredients</p>
      </div>
      <img class="info_img" src="../assets/images/calzone.jpg" alt="calzone img" />
    </section>
    <section class="more_info_wrapper">
      <h3>Click On the Links</h3>
      <nav>
        <ul>
          <RouterLink class="link" :to="{ name: 'history' }">Our History</RouterLink>
          <RouterLink class="link" :to="{ name: 'delivery' }">Delivery</RouterLink>
          <RouterLink class="link" :to="{ name: 'locations' }">Locations</RouterLink>
        </ul>
      </nav>
      <RouterView />
    </section>
  </div>
</template>
