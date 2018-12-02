<template lang="html">
      <div class="one-half column m-1">
    <form  @submit="addContact" id="card">
    <div class="row form-view">
      <div class="one-half column">
        <label for="name">Name</label>
        <input class="u-full-width"
               name="name"
               v-model="name"
               type="text"
               placeholder="First & Last Name"
               required>
      </div>
      <div class="one-half column">
        <label for="email">Email</label>
        <input class="u-full-width"
              v-model="email"
              name="email"
              type="email"
              placeholder="email@email.com"
              required>
      </div>
    </div>
    <div class="row">
      <div class="one-half column">
        <label for="phone">Phone Number</label>
        <input class="u-full-width"
               name="phone"
               v-model="phone"
               type="tel"
               placeholder="123-456-7890">
      </div>
      <div class="one-half column">
        <label for="contact_reason">Reason for contacting</label>
        <select class="u-full-width" name="contact_reason" v-model="contact_reason">
         <option value="Question" >Question</option>
         <option value="Recruitment">Recruitment</option>
         <option value="Freelance">Freelance</option>
         <option value="Others">Others</option>
        </select>
      </div>
    </div>
    <label for="message">Message</label>
    <textarea class="u-full-width"
              name="message"
              placeholder="Your Message…"
              v-model="message"
              required></textarea>
    <br>
    <input class="button-primary" type="submit" value="Submit">
  </form>
</div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'contact-form',
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      contact_reason: null,
      message: null,
    }
  },
  methods: {
    notify(message) {
      const card = document.getElementById('card')
      const notification = document.createElement('div')
      const msg = document.createTextNode(message)
      const formrow = document.querySelector('.form-view')
      notification.className = 'notify'
      notification.style.opacity = '1'
      notification.appendChild(msg)
      card.insertBefore(notification, formrow)
      //card.appendChild(notification)
    },
    clear(){
      return (this.name = null,
              this.email = null,
              this.phone = null,
              this.contact_reason = null,
              this.message = null)
    },
    removeNotify(){
      const notify = document.querySelector('.notify')
      if(notify){
        notify.parentNode.removeChild(notify)
      }
    },
    async addContact(e) {
      e.preventDefault()
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        contact_reason: this.contact_reason,
        message: this.message
      }
      await PostsService.addContact(data)
      console.log(data)
      // this.notify("Your message has been sent!")
      // this.$router.push({name: 'contact'})
      // this.clear()
    },

  }
}
</script>

<style lang="css">

.m-1 {
  padding:2em 2em;
}


.notify {
  background: rgb(122,60,255);
  background: linear-gradient(86deg, rgba(30,12,62,1) 0%, rgba(244,62,88,1) 71%);
  color:white;
  padding:.5em 1em;
  font-size:1em;
  border-radius:2px;
  margin:1em 0em;
  opacity:.5;
  transition: 2s;
}

.button-primary {
  background-image: linear-gradient(to right top, #ff5f5f, #fe5757, #fd4f4f, #fc4746, #fa3e3e);
  border:none !important;
  border-radius:20px !important;
  float: right;
}




</style>
