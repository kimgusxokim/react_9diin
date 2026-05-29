"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { Button, Card, CardContent, CardFooter, Field, FieldError, FieldGroup, FieldLabel, Input } from "@/components/ui"
import { NavLink } from "react-router"

// 1. 검증 스키마 정의
const loginSchema = z.object({
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  password: z.string().min(8, "비밀번호는 최소 8자리 이상이어야 합니다."),
})

export default function SignIn() {
  // 비밀번호 보이기/숨기기 토글 상태
  const [showPassword, setShowPassword] = React.useState(false)

  // 3. 리액트 훅 폼 선언 (SignIn 내부로 이동)
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof loginSchema>) {
    console.log("제출된 데이터:", data)
  }

  return (
    <main className="flex h-full min-h-[720px] w-full flex-col items-center justify-center gap-6 p-6">
      <div className="flex w-[372px] flex-col gap-6 p-4">
        <div className="flex flex-col gap-2">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">로그인</h4>
          <p className="text-muted-foreground">로그인을 위한 정보를 입력해주세요.</p>
        </div>

        <div className="grid gap-3">
          {/* 소셜 로그인 */}
          <Button type="button" variant={"secondary"} className="h-[36px]">
            <img src="public/assets/icons/social/google.svg" alt="@GOOGLE-LOGO" className="mr-1 h-[18px] w-[18px]" />
            구글 로그인
          </Button>

          {/* 경계선 */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-2 text-muted-foreground uppercase">or continue with</span>
            </div>
          </div>

          {/* 로그인 폼 */}
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
                </FieldGroup>
              </form>
            </CardContent>
            <CardFooter className="bg-background">
              <Field className="gap-4" orientation="vertical">
                <Button type="submit" form="form-rhf-demo" variant="outline" className="!bg-sky-800/50">
                  로그인
                </Button>
                <div className="flex items-center justify-center gap-1">
                  <span>계정이 없으신가요?</span>
                  <NavLink className="underline" to={"/sign-up"}>
                    회원가입
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
