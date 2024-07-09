import Aside from "../components/Aside/aside";
import Footer from "../components/Footer/footer";
import Main from "../components/Main/Main";

export default function Page() {
    return (
      <div className="h-screen flex flex-col bg-zinc-900 text-zinc-50">
      <div className="flex flex-1 overflow-y-hidden">
        <Aside/>
        <Main />
      </div>

      <Footer />
      
    </div>
    )
  }