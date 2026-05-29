import React from "react"
import { Separator } from "../ui"
import { NavLink, useNavigate } from "react-router"

function AppHeader() {
  const Navigate = useNavigate()
  return (
    <header className="fixed top-0 z-10 flex w-full items-center justify-center bg-[#121212]">
      <div className="flex w-full max-w-[1328px] items-center justify-between px-6 py-3">
        {/* 로고 및 네비게이션 메뉴 UI */}
        <div className="flex items-center gap-5">
          <img src="https://github.com/9diin.png" alt="@LOGO" onClick={() => Navigate("/")} className="h-6 w-6 cursor-pointer" />
          <div className="flex items-center gap-5">
            <div className="font-semibold">토픽 인사이트</div>
            <Separator orientation="vertical" className="!h-4" />
            <div className="font-semibold">프로필</div>
          </div>
        </div>
        {/* 로그인 UI */}
        <NavLink className="font-semibold text-muted-foreground transition-all duration-500 hover:text-white" to={"./sign-in"}>
          로그인
        </NavLink>
      </div>
    </header>
  )
}

export { AppHeader }
