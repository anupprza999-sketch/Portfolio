import {
  PORTFOLIO_PROJECTS_DATA,
  USER_PROFILE_DATA,
  PortfolioProject,
  UserProfileData
} from '../repositories/portfolio.repository.js'

export class PortfolioService {
  getAllProjects(): PortfolioProject[] {
    return PORTFOLIO_PROJECTS_DATA
  }

  getProjectById(id: string): PortfolioProject | undefined {
    return PORTFOLIO_PROJECTS_DATA.find((p) => p.id === id)
  }

  getProfile(): UserProfileData {
    return USER_PROFILE_DATA
  }

  processContactSubmission(data: { name: string; email: string; subject?: string; message: string }): { success: boolean; message: string; receivedAt: string } {
    return {
      success: true,
      message: `Thank you ${data.name}, your message has been received.`,
      receivedAt: new Date().toISOString()
    }
  }
}

export const portfolioService = new PortfolioService()
