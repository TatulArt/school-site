<template>
  <header>
    <div class="py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center my-2">
            <div id="iconContainer">
              <img id="icon" src="../../assets/Shared/geopoint.png" />
            </div>

            <span class="text">
              Краснодарский край, Туапсинский р-н, г. Туапсе, ул. Горького 40
            </span>
          </div>
          <div class="col-md d-flex align-items-center my-2">
            <div id="iconContainer">
              <img id="icon" src="../../assets/Shared/letter.png" />
            </div>
            <span class="text">sosh4tuapse@gmail.com</span>
          </div>
          <div class="col-md d-flex align-items-center my-2">
            <div id="iconContainer">
              <img id="icon" src="../../assets/Shared/phone.png" />
            </div>
            <span class="text">2-72-42</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #1eaaf1;
}

.text {
  color: rgba(255, 255, 255, 0.7);
}

#iconContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  padding: 1em;
  height: 2em;
  width: 2em;
  border-radius: 50%;
  background-color: #1e96f1;
}

#icon {
  height: 1.1em;
  object-fit: cover;
}
</style>
