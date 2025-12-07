import { LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { LightRays } from "@/components/ui/light-rays";

export default function Home() {
  return (
    <section className="py-16 flex flex-col items-center gap-8 max-w-3xl">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold text-center text-balance">
          Build{" "}
          <span className="italic bg-linear-to-r from-primary to-destructive bg-clip-text text-transparent">
            stronger{" "}
          </span>
          digital connections
        </h1>
        <span className="text-lg text-center text-balance">
          Use our URL shortener and QR Codes to engage your audience and connect
          them to the right information. Build, edit, and track everything
          inside the zigg.
        </span>
      </div>
      <div className="max-w-md w-full">
        <Form>
          <Field>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <LinkIcon className="size-4" />
              </InputGroupAddon>
              <InputGroupInput
                placeholder="Paste your very long link here"
                type="url"
                required
                size="lg"
              />
              <InputGroupAddon align="inline-end">
                <Button size="xs" type="submit">
                  Shorten for{" "}
                  <span className="line-through opacity-50">$0</span> Free
                </Button>
              </InputGroupAddon>
            </InputGroup>
            <FieldError>Please enter a valid URL.</FieldError>
          </Field>
        </Form>
      </div>
      <LightRays />
    </section>
  );
}
