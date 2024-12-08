import Swal from "sweetalert2";


function Newslatter() {

    const handelNewslatter = (e) => {
      e.preventDefault();
        const email = e.target.email.value
        Swal.fire({
            title: "Do you want to subscribe the newsletter?",
            // showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Subscribe",
            denyButtonText: `NO`
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(`Subscribed! ${email}`, "", "success");
              e.target.reset();
            }
          });
    };
  return (
    <div style={{backgroundImage:  "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.1)),  url(https://image-chorki.gotipath.com/uploads/images/2024/08/25/app_cover_images_a7ae3fd5b75465ee96775d70c20fbd91_goplay_subscription_page_banner_1.png?w=640&q=75)"}} className=" bg-fuchsia-200 p-4 rounded-md  bg-cover bg-center">
        
        <form onSubmit={handelNewslatter} className="flex backdrop-blur-sm rounded-md bg-white/40  flex-wrap w-full max-w-3xl my-10 mx-auto p-6" >
          <input
            className="appearance-none block w-full bg-white/80 text-gray-700   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white/90"
            type="text"
            name="email"
            required
            placeholder="Your Email"
          />
          <button
            className=" bg-blue-600 text-white font-bold py-3 px-4 rounded focus:outline-none hover:bg-blue-600"
            type="submit"
          > Subscribe</button>
        </form>
    </div>
  )
}

export default Newslatter