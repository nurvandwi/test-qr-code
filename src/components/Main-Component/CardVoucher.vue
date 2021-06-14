<template>
  <div class="card mt-2 p-2" style="max-width: 330px">
    <div class="row no-gutters">
      <div class="col-3">
        <img
          height="50"
          src="https://img.icons8.com/dotty/80/000000/starred-ticket.png"
        />
      </div>
      <div class="col-9 align-self-center">
        <div class="card-body p-0">
          <h5
            class="card-title"
            style="white-space: nowrap; font-size: 15px; margin: 0"
          >
            {{ title }}
          </h5>
          <p class="card-text">
            <small class="text-muted"> {{ subtitle }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"],
};
</script>

<style>
</style>