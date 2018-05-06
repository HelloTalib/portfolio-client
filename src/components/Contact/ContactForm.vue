<template lang="html">
  <div class="card-form" >
    <form class="card-body form-card" @submit="addContact"  id="card">
      <div class="form-row">
        <span class="flex-start">
        <label for="firstname" >First name:</label>
        <input type="text" name="firstname" placeholder="First Name" v-model="firstname" required/>
        </span>
        <span class="flex-end">
        <label for="lastname">Last name:</label>
        <input type="text" name="lastname" placeholder="Last Name" v-model="lastname" required/>
      </span>

      </div>
      <div class="form-row">
        <span class="flex-start">
          <label for="email">Email:</label>
          <input type="email" name="email" placeholder="example@email.com" v-model="email" required/>
        </span>
        <span class="flex-end">
          <label for="number" >Phone number:</label>
          <input type="phone" name="number" placeholder="888-888-8888" v-model="phone"/>
        </span>
      </div>
      <div class="form-row">
        <span class="flex">
        <label for="message"/>Message: </label>
        <textarea name="message" class="form-area" v-model="message" placeholder="Message goes here...">
        </textarea>
        </span>
      </div>
      <br><br>
      <button type="submit" name="button" >Submit</button>
    </form>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'contact-form',
  data() {
    return {
      firstname: null,
      lastname: null,
      email: null,
      phone: null,
      message: null
    }
  },
  methods: {
    notify(message) {
      const card = document.getElementById('card')
      const notification = document.createElement('div')
      const msg = document.createTextNode(message)
      const formrow = document.querySelector('.form-row')
      notification.className = 'notify'
      notification.style.opacity = '1'
      notification.appendChild(msg)
      card.insertBefore(notification, formrow)
      //card.appendChild(notification)
    },
    clear(){
      return (this.firstname = null,
              this.lastname = null,
              this.email = null,
              this.phone = null,
              this.message = null)
    },
    async addContact(e) {
      e.preventDefault()
      await PostsService.addContact({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        message: this.message,
      })
      this.notify("Your message has been sent!")
      this.$router.push({name: 'contact'})
      this.clear()
    },

  }
}
</script>

<style lang="css">

/* form {
  padding:2em 1em;
} */

.container {
  height:100vh;
}

.notify {
  background: rgb(122,60,255);
background: linear-gradient(90deg, rgba(122,60,255,1) 0%, rgba(0,151,255,1) 100%);
  color:white;
  padding:1em 1em;
  font-size:1em;
  border-radius:.5em;
  margin:1em 0em;
  opacity:0;
  transition: 2s;

}

button {
  float:right;
  padding:.5em 1.5em;
  background:none;
  border:1px solid rgba(255,35,72,1);
  color: rgba(255,35,72,1);
  border-radius:5px;
  font-size:1em;
  cursor:pointer;
}

button:hover {
  background: rgb(255,35,35);
  background: -moz-linear-gradient(left, rgba(255,35,35,1) 0%, rgba(255,35,72,1) 63%);
  background: -webkit-linear-gradient(left, rgba(255,35,35,1) 0%,rgba(255,35,72,1) 63%);
  background: linear-gradient(to right, rgba(255,35,35,1) 0%,rgba(255,35,72,1) 63%);
  color:white;
}

.form-card {

}

textarea {
  height:12em;
}

input, textarea {
  padding:.75em;
  border: 1px solid #ccc;
  border-radius:4px;
}

.form-row {
  display:flex;
}


.form-area {
  flex:1;
}

.flex {
  margin:auto;
  display:flex;
  flex-direction: column;
  flex:1;
  padding:0em;
}

.flex-start {
  margin:auto;
  display:flex;
  flex-direction: column;
  width:48%;
  padding-right:.5em;

  padding-bottom: 1em;
}

.card-form {
  width: 35vw;
  min-width:380px;
  height: inherit;
  border-radius:10px;
  margin:2em;
  padding:0 0 1.5em 0;

  box-shadow:none;
  /* box-shadow:0px 3px 38px 9px rgba(0,0,0,.12) */
}

.flex-end {
  margin:auto;
  display:flex;
  flex-direction: column;
  width:48%;
  padding-left:.5em;
  padding-bottom: 1em;


}

</style>
