import LoginMenu from "./components/LoginMenu";
import SliderLogin from "./components/SliderLogin";



function App() {
  return (
    <div >
        
      <div className="flex justify-center items-center">
        <div className="w-full h-screen bg-black text-white flex justify-center items-center">
          <LoginMenu/>  
        </div>
        <div className="w-full h-screen bg-[#3E1149] flex justify-center items-center">
          <SliderLogin/>        
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
