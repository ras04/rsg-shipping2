import React from "react";
import Swal from "sweetalert2";

function Mail() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c7e7080c-e002-4afa-802b-6967b82723f8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Your details were submitted successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
  };
  return (
    <div
      name="mail"
      className="flex justify-center items-center bg-secondary-light p-10"
    >
      <div className="w-[650px] rounded-lg bg-white p-5">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-secondary-dark md:text-4xl text-2xl">
            Get In Touch
          </h1>
          <div className="w-16 md:h-1 h-0.5 my-2 bg-primary-dark"></div>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col my-4">
          Name:
          <input name="name" placeholder="name" />
          E-mail:
          <input name="mail" placeholder="e-mail" />
          Phone:
          <input name="phone" placeholder="phone" />
          Message:
          <textarea
            placeholder="Enter something"
            className="border my-2 text-sm p-2"
            name="message"
          />
          <button
            type="submit"
            className="bg-primary-dark md:w-36 w-28 md:h-12 h-9 mx-auto my-4 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Mail;
