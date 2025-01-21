import request from "@/api"

export function getTasksList(params: { page?: number, pageSize?: number } = { page: 1, pageSize: 20 }) {
  return request.get("/api/tasks/list", { params })
}

