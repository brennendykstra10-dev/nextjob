import Link from "next/link"

export default function Home() {
  return (
    <div style={{
      fontFamily: "Arial",
      padding: "60px",
      maxWidth: "900px",
      margin: "0 auto"
    }}>
      
      {/* HERO SECTION */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          NextJob 🚀
        </h1>

        <p style={{ fontSize: "18px", color: "#555" }}>
          Find real jobs fast. Post jobs instantly. No clutter.
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link href="/jobs" style={{
            padding: "12px 20px",
            background: "black",
            color: "white",
            borderRadius: "8px",
            marginRight: "10px",
            textDecoration: "none"
          }}>
            Browse Jobs
          </Link>

          <Link href="/admin" style={{
            padding: "12px 20px",
            border: "1px solid black",
            borderRadius: "8px",
            textDecoration: "none"
          }}>
            Post a Job
          </Link>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div style={{ marginTop: "80px" }}>
        <h2>Why NextJob?</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
          marginTop: "20px"
        }}>
          
          <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
            <h3>⚡ Fast</h3>
            <p>Find jobs instantly without spam or clutter.</p>
          </div>

          <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
            <h3>📍 Local + Remote</h3>
            <p>Browse jobs near you or work from anywhere.</p>
          </div>

          <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
            <h3>🧠 Simple</h3>
            <p>No complicated setup. Just jobs.</p>
          </div>

        </div>
      </div>

    </div>
  )
}