import { AppFooter, AppHeader, AppSidebar } from "./components/common"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { SkeletonHotTopic } from "./components/skeleton"
import { Skeleton } from "./components/ui"

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
        <AppHeader />
        <div className="container">
          <main className="flex h-full min-h-[720px] w-full gap-6 p-6">
            {/* 카테고리 사이드바 */}
            <AppSidebar />
            {/* 토픽 컨텐츠 */}
            <section className="flex flex-1 flex-col gap-12">
              {/* HOT 토픽 */}
              <div className="flex w-full flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/assets/fire.gif" alt="@IMG" className="h-7 w-7" />
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">HOT 토픽</h4>
                  </div>
                  <p className="text-muted-foreground md:text-base">지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를 얻어보세요.</p>
                </div>
                <div className="grid grid-cols-4 gap-6">
                  <SkeletonHotTopic />
                  <SkeletonHotTopic />
                  <SkeletonHotTopic />
                  <SkeletonHotTopic />
                </div>
              </div>
              {/* NEW 토픽 */}
              <div className="flex w-full flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/assets/writing.gif" alt="@IMG" className="h-7 w-7" />
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">NEW 토픽</h4>
                  </div>
                  <p className="text-muted-foreground md:text-base">새로운 시선으로, 새로운 이야기를 시작하세요. 지금 바로 당신만의 이야기를 시작하세요.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Skeleton className="h-[210px] w-full" />
                  <Skeleton className="h-[210px] w-full" />
                  <Skeleton className="h-[210px] w-full" />
                  <Skeleton className="h-[210px] w-full" />
                </div>
              </div>
            </section>
          </main>
        </div>
        <AppFooter />
      </div>
    </ThemeProvider>
  )
}

export default App
