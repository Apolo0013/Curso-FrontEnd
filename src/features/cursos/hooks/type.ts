type Author = {
    name: string,
    srcAvatar: string,
    about: string
}

export type Course = {
    id: string
    title: string
    author: Author,
    description: string,
    summary: string
    price: number
    thumbnailUrl: string
    learningOutcomes: string[]
    targetAudience: string[]
    prerequisites: string[]
    completionBenefits: string[]
}
