import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogPopup,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"


export default function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Share</Button>} />
      <DialogPopup className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <label htmlFor="link" className="sr-only">
              Link
            </label>
            <Input
              id="link"
              defaultValue="https://shapes-ui.com/docs/installation"
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose render={<Button type="button">Close</Button>} />
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  )
}
