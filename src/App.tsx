import { ChartNoAxesCombined, ChevronDown, CodeXml, DraftingCompass, Footprints, Goal, Lightbulb, List, Rocket } from "lucide-react"
import { AppFooter, AppHeader } from "./components/common"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { Button } from "./components/ui"

const CLASS_CATEGORY = [
  { id: 1, label: "전체", category: "", icon: <List /> },
  { id: 2, label: "인문학", category: "humanity", icon: <Lightbulb /> },
  { id: 3, label: "스타트업", category: "start-up", icon: <Rocket /> },
  { id: 4, label: "IT·프로그래밍", category: "programming", icon: <CodeXml /> },
  { id: 5, label: "서비스·전략 기획", category: "planning", icon: <Goal /> },
  { id: 6, label: "마케팅", category: "marketing", icon: <ChartNoAxesCombined /> },
  { id: 7, label: "디자인·일러스트", category: "design", icon: <DraftingCompass /> },
  { id: 8, label: "자기계발", category: "self-development", icon: <Footprints /> },
]

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
        <AppHeader />
        <div className="container">
          <main className="flex h-full min-h-[720px] w-full gap-6 p-6">
            {/* 카테고리 사이드바 */}
            <aside className="flex w-60 min-w-60 flex-col gap-6">
              <div className="flex items-center gap-2">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">카테고리</h4>
                <ChevronDown className="mt-1" />
              </div>
              <div className="flex w-full flex-col gap-2">
                {CLASS_CATEGORY.map((menu) => {
                  return (
                    <Button key={menu.id} variant={"ghost"} className="justify-start text-muted-foreground transition-all duration-500 hover:pl-6 hover:text-white">
                      {menu.icon}
                      {menu.label}
                    </Button>
                  )
                })}
              </div>
            </aside>
            {/* 토픽 컨텐츠 */}
            <section></section>
          </main>
        </div>
        <AppFooter />
      </div>
    </ThemeProvider>
  )
}

export default App
