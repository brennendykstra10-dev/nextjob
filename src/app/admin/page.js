"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AdminPage() {
  const [jobs, setJobs] = useState([])

  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [location, setLocation] = useState("")
  const [salary, setSalary] = useState("")
  const [applyLink, setApplyLink] = useState("")

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

  async function addJob(e) {
    e.preventDefault()

    const { error } = await supabase
      .from("jobs")
      .insert([
        {
          title,
          company,
          location,
          salary,
          apply_link: applyLink,
        },
      ])

    if (!error) {
      setTitle("")
      setCompany("")
      setLocation("")
      setSalary("")
      setApplyLink("")

      fetchJobs()
    }
  }

  async function deleteJob(id) {
    await supabase
      .from("jobs")
      .delete()
      .eq("id", id)

    fetchJobs()
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        NextJob Admin Dashboard
      </h1>

      <form
        onSubmit={addJob}
        className="space-y-4 mb-10"
      >
        <input
          className="border p-3 w-full"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-3 w-full"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          className="border p-3 w-full"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="border p-3 w-full"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <input
          className="border p-3 w-full"
          placeholder="Apply Link"
          value={applyLink}
          onChange={(e) => setApplyLink(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Add Job
        </button>
      </form>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-xl p-5"
          >
            <h2 className="text-2xl font-semibold">
              {job.title}
            </h2>

            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>

            <div className="mt-4 flex gap-4">
              <a
                href={job.apply_link}
                target="_blank"
                className="text-blue-500"
              >
                View Apply Link
              </a>

              <button
                onClick={() => deleteJob(job.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}