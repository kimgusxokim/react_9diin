"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { Button, Card, CardContent, CardFooter, Checkbox, Field, FieldError, FieldGroup, FieldLabel, Input, Label } from "@/components/ui"
import { NavLink } from "react-router"
import { ArrowLeft, Asterisk, ChevronRight } from "lucide-react"

// 1. 검증 스키마 정의
const loginSchema = z
  .object({
    email: z.string().email("올바른 이메일 형식이 아닙니다."),
    password: z.string().min(8, "비밀번호는 최소 8자리 이상이어야 합니다."),
    confirmPassword: z.string().min(8, "비밀번호 확인을 입력해주세요."),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "비밀번호가 일치하지 않습니다.",
        path: "confirmPassword",
      })
    }
  })

export default function SignUP() {
  // 비밀번호 보이기/숨기기 토글 상태
  const [showPassword, setShowPassword] = React.useState(false)

  // 3. 리액트 훅 폼 선언 (SignIn 내부로 이동)
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(data: z.infer<typeof loginSchema>) {
    console.log("제출된 데이터:", data)
  }

  return (
    <main className="flex h-full min-h-[720px] w-full flex-col items-center justify-center gap-6 p-6">
      <div className="flex w-[372px] flex-col gap-6 p-4">
        <div className="flex flex-col gap-2">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">회원가입</h4>
          <p className="text-muted-foreground">회원가입을 위한 정보를 입력해주세요.</p>
        </div>
        <div className="grid gap-2">
          {/* 회원가입 폼 */}
          <Card className="w-full bg-background sm:max-w-md">
            <CardContent>
              <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="login-email">이메일</FieldLabel>
                        <Input {...field} id="login-email" aria-invalid={fieldState.invalid} placeholder="이메일을 입력하세요." autoComplete="off" />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="password"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="login-password">비밀번호</FieldLabel>
                        <Input {...field} id="login-password" aria-invalid={fieldState.invalid} placeholder="비밀번호를 입력하세요." autoComplete="off" />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="confirmPassword"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="login-confirm-password">비밀번호 확인</FieldLabel>
                        <Input {...field} id="login-confirm-password" aria-invalid={fieldState.invalid} placeholder="비밀번호를 다시 입력해주세요." autoComplete="off" />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <div className="grid gap-2">
                    <div className="grid gap-4">
                      <div className="flex items-center gap-1">
                        <Asterisk size={14} className="text-[#F96859]" />
                        <Label>필수 동의항목</Label>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex">
                          <div className="flex w-full items-center justify-start gap-2 text-xs">
                            <Checkbox />
                            서비스 이용약관 동의
                          </div>
                          <Button variant={"link"} className="gap-1 !p-0">
                            <p className="text-xs">자세히 보기</p>
                            <ChevronRight />
                          </Button>
                        </div>
                        <div className="flex">
                          <div className="flex w-full items-center justify-start gap-2 text-xs">
                            <Checkbox />
                            개인정보 수집 및 이용동의
                          </div>
                          <Button variant={"link"} className="gap-1 !p-0">
                            <p className="text-xs">자세히 보기</p>
                            <ChevronRight />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </FieldGroup>
              </form>
            </CardContent>
            <CardFooter className="bg-background">
              <Field className="gap-4" orientation="vertical">
                <div className="flex items-center gap-2">
                  <Button type="button" variant={"outline"} size={"icon"}>
                    <ArrowLeft />
                  </Button>
                  <Button type="submit" form="form-rhf-demo" variant="outline" className="flex-1 !bg-sky-800/50">
                    회원가입
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <span>이미 계정이 있으신가요?</span>
                  <NavLink className="underline" to={"/sign-in"}>
                    로그인
                  </NavLink>
                </div>
              </Field>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
