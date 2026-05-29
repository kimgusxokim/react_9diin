import { Button, Input, Label, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, Skeleton } from "@/components/ui"
import { TOPIC_CATEGORY } from "@/constant/category.constant"
import { ArrowLeft, Asterisk, BookOpenCheck, ImageOff, Save } from "lucide-react"

export default function CreateTopic() {
  return (
    <main className="flex h-full min-h-[1024px] w-full justify-between gap-6 p-6">
      <div className="fixed right-1/2 bottom-10 z-20 flex translate-x-1/2 items-center gap-2">
        <Button variant={"outline"} size={"icon"}>
          <ArrowLeft />
        </Button>
        <Button variant={"outline"} className="w-22 !bg-yellow-800/50">
          <Save />
          저장
        </Button>
        <Button variant={"outline"} className="w-22 !bg-emerald-800/50">
          <BookOpenCheck />
          발행
        </Button>
      </div>
      {/* 토픽 작성하기 */}
      <section className="flex h-full w-3/4 flex-col gap-6">
        <div className="flex flex-col border-b pb-6">
          <span className="font-semibold text-[#F96859]">Step 1</span>
          <span className="text-base font-semibold">토픽 작성하기</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Asterisk size={14} className="text-[#F96859]" />
            <Label className="text-muted-foreground">제목</Label>
          </div>
          <Input placeholder="토픽 제목을 입력하세요." className="h-16 border-0 pl-6 !text-lg placeholder:text-lg placeholder:font-semibold"></Input>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Asterisk size={14} className="text-[#F96859]" />
            <Label className="text-muted-foreground">본문</Label>
          </div>
          <Skeleton className="h-100 w-full" />
        </div>
      </section>
      {/* 카테고리 및 썸네일 등록 */}
      <section className="flex h-full w-1/4 flex-col gap-6">
        <div className="flex flex-col border-b pb-6">
          <span className="font-semibold text-[#F96859]">Step 2</span>
          <span className="text-base font-semibold">카테고리 및 썸네일 등록</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Asterisk size={14} className="text-[#F96859]" />
            <Label className="text-muted-foreground">카테고리</Label>
          </div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="토픽 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>토픽 선택</SelectLabel>
                {TOPIC_CATEGORY.map((item) => {
                  return (
                    <SelectItem key={item.id} value={item.category}>
                      {item.label}
                    </SelectItem>
                  )
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Asterisk size={14} className="text-[#F96859]" />
            <Label className="text-muted-foreground">썸네일</Label>
          </div>
          <Skeleton className="aspect-video w-full" />
          <Button variant={"outline"} className="border-0">
            <ImageOff />
            썸네일 제거
          </Button>
        </div>
      </section>
    </main>
  )
}
