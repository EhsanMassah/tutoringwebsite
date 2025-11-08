import React from 'react'
import { SUBJECTS } from '../data/subjects'
import SubjectCard from './SubjectCard'

export default function SubjectGrid() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SUBJECTS.map((s) => (
        <SubjectCard key={s.id} name={s.name} level={s.level} boards={s.boards} focus={s.focus} />
      ))}
    </div>
  )
}
