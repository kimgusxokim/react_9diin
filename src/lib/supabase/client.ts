import { createBrowserClient } from "@supabase/ssr"

// 1. 브라우저용 Supabase 클라이언트를 한 번만 생성하여 변수에 담습니다.
const supabase = createBrowserClient(import.meta.env.VITE_SUPABASE_URL!, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY!)

// 2. 외부에서 'import supabase from ...'으로 가져올 수 있도록 객체 자체를 default로 내보냅니다.
export default supabase
