import React from "react";
import { Stack, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
	return (
		<section className="container mx-auto">
			<div className="flex flex-row">
				<div className="w-full md:w-3/4 mx-auto p-4">
					<h1 className="text-2xl font-bold text-gray-800">Contact Me</h1>
					<p className="text-gray-600">
						I am currently looking for a full time position. If you are
						interested in working with me, please feel free to contact me.
					</p>
					<form className="flex flex-col">
						<Stack spacing={4}>
							<Input
								placeholder="Name"
								type="text"
								name="name"
								id="name"
								className="w-full"
								required
							/>
							<Input
								placeholder="Email"
								type="email"
								name="email"
								id="email"
								className="w-full"
								required
							/>
							<Input
								placeholder="Subject"
								type="text"
								name="subject"
								id="subject"
								className="w-full"
								required
							/>
							<Textarea
								placeholder="Message"
								type="text"
								name="message"
								id="message"
								className="w-full"
								required
							/>
						</Stack>
						<div className="py-10">
							<Button colorScheme="blue">Send</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
