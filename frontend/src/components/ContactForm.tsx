import { FC, useState, FormEvent } from 'react'
import { submitContact } from '../services/api'

export const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setStatusMessage('')

    try {
      const res = await submitContact(formData)
      setStatus('success')
      setStatusMessage(res.message || 'Your message has been sent successfully.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err: any) {
      setStatus('error')
      setStatusMessage(err.message || 'Failed to send message. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
            Your Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Elena Rostova"
            className="w-full px-4 py-2.5 rounded bg-[#141418] border border-[#242429] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#c8a45c] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. studio@production.com"
            className="w-full px-4 py-2.5 rounded bg-[#141418] border border-[#242429] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#c8a45c] transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="e.g. Environment Art Collaboration"
          className="w-full px-4 py-2.5 rounded bg-[#141418] border border-[#242429] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#c8a45c] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
          Message *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe your project, timeline, and aesthetic requirements..."
          className="w-full px-4 py-2.5 rounded bg-[#141418] border border-[#242429] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#c8a45c] transition-colors resize-none"
        ></textarea>
      </div>

      {status === 'success' && (
        <div className="p-3 rounded bg-[#182618] border border-[#284828] text-green-300 text-xs">
          {statusMessage}
        </div>
      )}

      {status === 'error' && (
        <div className="p-3 rounded bg-[#281818] border border-[#482828] text-red-300 text-xs">
          {statusMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 rounded text-xs uppercase tracking-wider font-semibold bg-white text-black hover:bg-neutral-200 transition-colors disabled:opacity-50 cursor-pointer"
      >
        {status === 'loading' ? 'Sending Message...' : 'Send Message'}
      </button>
    </form>
  )
}
