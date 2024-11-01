<template>
  <div class="modal__mask">
    <div class="modal__wrapper" @click.self="$emit('close')">
      <div class="modal__container">
        <div class="modal__header text-gradient">
          Contact Me
        </div>
        <form ref="form" class="modal__form" @submit.prevent="sendEmail">
          <div class="modal__input-group">
            <label class="label" required>Name</label>
            <input type="text" name="name">
          </div>
          <div class="modal__input-group"><label class="label">Email</label>
            <input type="email" name="email" required>
          </div>
          <div class="modal__input-group"> <label class="label">Message</label>
            <textarea required name="message" rows="4"></textarea>
          </div>
          <button class="modal-default-button cancel" @click="$emit('close')">
            Cancel
          </button>
          <button type="submit" class="send">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm('service_8zbwurc', 'template_yo037lw', this.$refs.form, {
          publicKey: 'Wq12_rEOZS5-tazms',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },
};
</script>


<style lang="scss">
.modal {
  transition: 1s;

  &__mask {
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: table;
    transition: opacity 1s ease;
  }

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    width: 300px;
    margin: 0px auto;
    padding: 30px;
    background-color: rgb(20, 20, 20);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    position: relative;

    &::before {
      display: block;
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: var(--gradient);
      z-index: -1;
      border-radius: 5px;
    }
  }

  &__header {
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 700;
    white-space: nowrap;
  }

  &__form {
    margin: 20px 0;

    label {
      display: block;
      font-size: 10px;
    }

    button {
      background: none;
      border-radius: 5px;
      padding: 15px;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--color-text);
      transition: .5s;
      margin-right: 10px;
      cursor: pointer;

      &.cancel {
        border: 1px solid var(--c-purple);

        &:hover {
          background: var(--c-purple);
        }
      }

      &.send {
        border: 1px solid var(--c-yellow);

        &:hover {
          background: var(--c-yellow);
        }
      }
    }
  }

  &__input-group {
    margin-bottom: 15px;
    position: relative;

    input {
      height: 24px;
    }

    input,
    textarea {
      width: 100%;
      background-color: transparent;
      border: 1px solid grey;
      border-radius: 3px;
      color: var(--color-text);


      &::before {
        display: block;
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: var(--c-yellow);
        z-index: -1;
        border-radius: 5px;
      }

      &:focus,
      :hover {
        border-color: var(--c-yellow);
      }
    }
  }
}
</style>
