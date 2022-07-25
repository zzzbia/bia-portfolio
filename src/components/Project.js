import React from "react";
import { Box, Image, Badge, Button, Stack } from "@chakra-ui/react";

const Project = ({
	title,
	github,
	live,
	description,
	image,
	skills,
	isDeployed,
}) => {
	return (
		<Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
			<Image src={image} alt={`Screenshot for ${title}`} />

			<Box p="6">
				<Box display="flex" alignItems="baseline">
					{isDeployed ? (
						<Badge borderRadius="full" px="2" colorScheme="teal">
							Deployed
						</Badge>
					) : (
						""
					)}
					<Box
						color="gray.500"
						fontWeight="semibold"
						letterSpacing="wide"
						fontSize="xs"
						textTransform="uppercase"
						ml="2"
					>
						{skills}
					</Box>
				</Box>

				<Box
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					noOfLines={1}
				>
					{title}
				</Box>

				<Box>
					<Box as="span" color="gray.600" fontSize="sm">
						{description}
					</Box>
				</Box>
				<Box py={4}>
					<Stack direction="row" spacing={4}>
						{isDeployed && live && (
							<Button
								colorScheme="teal"
								variant="solid"
								onClick={() => {
									window.open(live, "_blank");
								}}
							>
								View Project
							</Button>
						)}
						<Button
							onClick={() => {
								window.open(github, "_blank");
							}}
							colorScheme="teal"
							variant="outline"
						>
							View Code
						</Button>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
};

export default Project;
