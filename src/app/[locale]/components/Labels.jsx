import * as React from "react";

export function ReactLabel() {
  return (
    <div className="bg-[#00CCF5] pt-[3px] px-[10px] pb-[5px] rounded-[30px] border-[1.5px] border-[#00BBE0] shadow-[0px_-2.5px_0px_0px_#00BBE0_inset]">
      <p className="font-inter text-xs text-white">React</p>
    </div>
  );
}

export function TailwindLabel() {
  return (
    <div className="bg-[#37BDF7] pt-[3px] px-[10px] pb-[5px] rounded-[30px] border-[1.5px] border-[#0AA7EB] shadow-[0px_-2.5px_0px_0px_#0AA7EB_inset]">
      <p className="font-inter text-xs text-white">Tailwindcss</p>
    </div>
  );
}

export function NextjsLabel() {
  return (
    <div className="bg-[#313131] pt-[3px] px-[10px] pb-[5px] rounded-[30px] border-[1.5px] border-[#111111] shadow-[0px_-2.5px_0px_0px_#111111_inset]">
      <p className="font-inter text-xs text-white">Next.js</p>
    </div>
  );
}

export function JavascriptLabel() {
  return (
    <div className="bg-[#F0BD25] pt-[3px] px-[10px] pb-[5px] rounded-[30px] border-[1.5px] border-[#E4A125] shadow-[0px_-2.5px_0px_0px_#E4A125_inset]">
      <p className="font-inter text-xs text-white">Javascript</p>
    </div>
  );
}

export function FramerMotionLabel() {
  return (
    <div className="bg-[#FF5CD9] pt-[3px] px-[10px] pb-[5px] rounded-[30px] border-[1.5px] border-[#EC00B4] shadow-[0px_-2.5px_0px_0px_#EC00B4_inset]">
      <p className="font-inter text-xs text-white">Framer Motion</p>
    </div>
  );
}

export function PhpLabel() {
  return (
    <div className="bg-[#6D81B6] pt-[3px] px-[10px] pb-[5px] rounded-[30px] border-[1.5px] border-[#5268A3] shadow-[0px_-2.5px_0px_0px_#5268A3_inset]">
      <p className="font-inter text-xs text-white">PHP</p>
    </div>
  );
}

export function LuaLabel() {
  return (
    <div className="bg-[#0802B6] pt-[3px] px-[10px] pb-[5px] rounded-[30px] border-[1.5px] border-[#050179] shadow-[0px_-2.5px_0px_0px_#050179_inset]">
      <p className="font-inter text-xs text-white">Lua</p>
    </div>
  );
}

export function MySqlLabel() {
  return (
    <div className="bg-[#006187] pt-[3px] px-[10px] pb-[5px] rounded-[30px] border-[1.5px] border-[#004966] shadow-[0px_-2.5px_0px_0px_#004966_inset]">
      <p className="font-inter text-xs text-white">MySQL</p>
    </div>
  );
}

export function SupabaseLabel() {
  return (
    <div className="bg-[#3FCF8E] pt-[3px] px-[10px] pb-[5px] rounded-[30px] border-[1.5px] border-[#29A36C] shadow-[0px_-2.5px_0px_0px_#29A36C_inset]">
      <p className="font-inter text-xs text-white">Supabase</p>
    </div>
  );
}

export function ExpressLabel() {
  return (
    <div className="bg-[#3D3D3D] pt-[3px] px-[10px] pb-[5px] rounded-[30px] border-[1.5px] border-[#010101] shadow-[0px_-2.5px_0px_0px_#010101_inset]">
      <p className="font-inter text-xs text-white">Express.js</p>
    </div>
  );
}

export function FigmaLabel() {
  return (
    <div className="bg-[#A259FF] pt-[3px] px-[10px] pb-[5px] rounded-[30px] border-[1.5px] border-[#801FFF] shadow-[0px_-2.5px_0px_0px_#801FFF_inset]">
      <p className="font-inter text-xs text-white">Figma</p>
    </div>
  );
}

export function LanguageLabel(props) {
  return (
    <div className="bg-[#CEA37E] hover:bg-[#FF801F] w-max pt-[3px] px-[10px] pb-[5px] rounded-[30px] border-[1.5px] border-[#A07553] hover:border-[#A35829] shadow-[0px_-2.5px_0px_0px_#A07553_inset] hover:shadow-[0px_-2.5px_0px_0px_#A35829_inset]">
      <p className="font-inter text-xs text-white">{props.language}</p>
    </div>
  );
}

export function DeleteButtonLabel(props) {
  return (
    <div className="bg-[#E5484D] w-max pt-[3px] px-[10px] pb-[5px] rounded-[30px] border-[1.5px] border-[#CE2C31] shadow-[0px_-2.5px_0px_0px_#CE2C31_inset]">
      <p className="font-inter text-xs text-white">{props.nope}</p>
    </div>
  );
}

export function NotificationAlert() {
  return (
    <div className="h-[1.5rem] w-[1.5rem] md:h-[1.8rem] md:w-[1.8rem] flex flex-col justify-center items-center bg-[#FF3A30] rounded-full">
      <p className="text-base md:text-lg font-semibold text-white">1</p>
    </div>
  );
}

export function WelcomeLabel({ text, bgcolor, bordercolor }) {
  const containerStyle = {
    backgroundColor: bgcolor,
    borderRadius: "30px",
    border: `1.5px solid ${bordercolor}`,
    padding: "3px 10px 5px",
    boxShadow: `0px -2.5px 0px 0px ${bordercolor} inset, 0px 4px 10px 0px rgba(32, 32, 32, 0.25)`,
    width: "max-content",
  };

  const textStyle = {
    fontFamily: "var(--font-inter)",
    fontSize: "14px",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>{text}</p>
    </div>
  );
}
