"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function JobsPage() {
  const [jobs, setJobs] = useState([])

  async function fetchJobs() {
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error) {
      setJobs(data)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  return (
    <div style={{ padding: "40px" }}>
      <h1>Jobs</h1>
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id} style={{ marginBottom: "20px", border: "1px solid #ddd", padding: "10px" }}>
              <h2>{job.title}</h2>
              <p>{job.company} - {job.location}</p>
              <p>Salary: {job.salary}</p>
              <a href={job.apply_link} target="_blank" rel="noopener noreferrer">Apply</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}