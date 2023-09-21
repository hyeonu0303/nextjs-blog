import Link from "next/link"
import styles from './styles.module.css'
import Layout from "@/app/components/Post/layout"
export default function FirstPost(){
  return (
    <Layout>
      <h1 className={styles.heading}>First Post</h1>
      
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  )
}