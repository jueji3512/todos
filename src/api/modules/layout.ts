import request from "@/api"

export function getRecentTasks(params: { page?: number, pageSize?: number } = { page: 1, pageSize: 5 }) {
  return request.get("/api/tasks/recent", { params })
}