import React from "react"
import { Button, Separator } from "../ui"
import { Rocket } from "lucide-react"

function AppFooter() {
  return (
    <footer className="flex w-full justify-center bg-[#121212]">
      <div className="flex w-full max-w-[1328px] flex-col gap-6 p-6 pb-18">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">나의 학습 여정이,</h3>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">나만의 창작으로 이어지는 플랫폼</h3>
            </div>
            <div className="flex gap-2">
              <Button variant={"outline"} size={"icon"} className="border-0">
                <img src="public/assets/icons/icon-002.svg" alt="@SNS" className="mt-[2px] h-6 w-6" />
              </Button>
              <Button variant={"outline"} size={"icon"} className="border-0">
                <img src="public/assets/icons/icon-001.svg" alt="@SNS" className="h-[22px] w-[22px]" />
              </Button>
            </div>
          </div>
          <div className="flex gap-3">
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">이용약관</p>
            <Separator orientation="vertical" className="!h-[14px]" />
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">개인정보처리방침</p>
            <Separator orientation="vertical" className="!h-[14px]" />
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">클래스 론칭 문의</p>
          </div>
        </div>
        <Separator />
        <div className="flex w-full justify-between">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <p className="h-10 text-base font-semibold">고객센터</p>
              <div className="flex flex-col items-start gap-1">
                <p>평일 오전 9시 ~ 오후 6시</p>
                <p>문의 : mingoteam@naver.com</p>
              </div>
            </div>
            <p>© Mingo Team all rights reserved</p>
          </div>
          <div className="mr-[47px] flex flex-col">
            <p className="h-10 text-base font-semibold">사업자 정보</p>
            <div className="flex flex-col items-start gap-1">
              <p>대표이사 : 박성재</p>
              <p>사업자 번호 : 696-48-01248</p>
              <p>통신판매신고번호 : 2025-서울서초-1014</p>
              <p>주소 : 서울특별시 서초구 서초대로 15길 33</p>
              <p>대표번호 : 070-8080-4429</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { AppFooter }
